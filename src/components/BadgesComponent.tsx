const BadgesComponent = () => {
  return (
    <div className="badge-container">
        <span className='badge blue'>C#</span>
        <span className='badge gray'>Java</span>
        <span className='badge red'>Python</span>
        <span className='badge green'>JavaScript</span>
        <span className='badge yellow'>TypeScript</span>
        <span className='badge indigo'>HTML</span>
        <span className='badge purple'>CSS</span>

        {/* <libraries />
        <frameworks></frameworks> */}
        <span className='badge pink'>React.js</span>
        <span className='badge pink'>Node.js</span>
        <span className='badge pink'>TailwindCSS</span>


        <span className='badge pink'>PostgreSQL</span>
        <span className='badge pink'>MySQL</span>
        <span className='badge pink'>MongoDB</span>

    </div>
  );
}

export default BadgesComponent;