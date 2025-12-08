
function WaveWord() {
    var Phrase = "Click Cards"
    var phraseArray = Phrase.split("");
    return (
        <div className="wave">
            {phraseArray.map((char, index) => (
                <span
                    key={index} className='wave-word'>
                    {char}
                </span>
            ))}
        </div>
    );
}

export default WaveWord;