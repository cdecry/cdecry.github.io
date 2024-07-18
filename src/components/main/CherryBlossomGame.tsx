import React, { useRef, useEffect, useState } from 'react';

const CherryBlossomGame = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    const [basketImage, setBasketImage] = useState<HTMLImageElement | null>(null);
    const [backgroundImage, setBackgroundImage] = useState<HTMLImageElement | null>(null);

    useEffect(() => {
        const img = new Image();
        img.src = require('../../assets/images/basket.png');
        img.onload = () => setBasketImage(img);

        const imgBg = new Image();
        imgBg.src = 'https://steamuserimages-a.akamaihd.net/ugc/943969305988006207/0F5C5E2B48EE9704AD561982A825EA9B8EB4EACC/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false';
        imgBg.onload = () => setBackgroundImage(imgBg);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const basket = {
        x: 100,
        y: 170,
        width: 46,
        height: 28
        };

        let cherryBlossoms: any[] = [];
        let score = 0;
        let animationFrameId: number;

        const drawBasket = () => {
            if (!ctx || !basketImage) return;
            ctx.drawImage(basketImage, basket.x - basket.width / 2, basket.y, basket.width, basket.height);
        }

        const drawBackground = () => {
            if (!ctx || !backgroundImage) return;
            ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
        }

        const getRandomFontSize = (min: number, max: number) => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };

        const drawCherryBlossoms = () => {
            cherryBlossoms.forEach(blossom => {
                if (!ctx) return;

                ctx.fillStyle = `rgba(255, 192, 203, ${blossom.opacity})`;
                ctx.font = `${blossom.size}px Arial`;
                ctx.fillText('🌸', blossom.x, blossom.y);
            });
        }

        const updateCherryBlossoms = () => {
            if (!canvas) return;
            cherryBlossoms.forEach(blossom => {
                blossom.y += 1;
                if (blossom.y > canvas.height) {
                    blossom.opacity -= 0.02;
                }
                if (blossom.y > basket.y && blossom.y < basket.y + basket.height &&
                    blossom.x > basket.x - basket.width / 2 && blossom.x < basket.x + basket.width / 2) {
                blossom.caught = true;
                score++;
                }
            });
            cherryBlossoms = cherryBlossoms.filter(blossom => blossom.opacity > 0 && !blossom.caught);
        }

        const spawnCherryBlossom = () => {
            if (!canvas) return;
            if (Math.random() < 0.02) {
                cherryBlossoms.push({
                    x: Math.random() * (canvas.width - 2),
                    y: 0,
                    opacity: 1,
                    caught: false,
                    size: getRandomFontSize(8, 15)
                });
            }
        }

        const drawScore = () => {
            if (!ctx) return;
            ctx.fillStyle = 'black';
            ctx.font = '12px Arial';
            ctx.fillText(`score: ${score}`, 10, 20);
        }

        const gameLoop = () => {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawBackground();
            
            ctx.globalAlpha = 0.5; // Adjust the alpha value to make it more or less transparent
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.globalAlpha = 1.0; // Reset alpha
            
            spawnCherryBlossom();
            updateCherryBlossoms();
            drawBasket();
            drawCherryBlossoms();
            drawScore();

        //   if (score >= 15) {
        //     ctx.fillStyle = 'green';
        //     ctx.font = '30px Arial';
        //     ctx.fillText('Success!', 100, 150);
        //     setTimeout(() => {
        //       score = 0;
        //       cherryBlossoms = [];
        //       animationFrameId = requestAnimationFrame(gameLoop);
        //     }, 2000);
        //   } else {
        //     animationFrameId = requestAnimationFrame(gameLoop);
        //   }
            animationFrameId = requestAnimationFrame(gameLoop);
        }

        const handleMouseMove = (e: any) => {
            if (!canvas) return;
            const rect = canvas.getBoundingClientRect();
            basket.x = e.clientX - rect.left;
        }

        canvas.addEventListener('mousemove', handleMouseMove);

        gameLoop();

        return () => {
            cancelAnimationFrame(animationFrameId);
            canvas.removeEventListener('mousemove', handleMouseMove);
        };
    }, [backgroundImage]);

    return (
        <canvas ref={canvasRef} width={290} height={200} className='cbGame'/>
    );
};

export default CherryBlossomGame;