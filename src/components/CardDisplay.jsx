import { useState } from "react";

function CardDisplay({cards}) {
    const [flipped, setFlipped] = useState({});

    const handleflip = (cardId) => {
        setFlipped(prev => ({
            ...prev,
            [cardId]: !prev[cardId]
        }));
    }

    return (
        <div id="comp-box" className="flex flex-wrap bg-card-display rounded-2xl w-full sm:w-[400px] sm:h-[400px] p-3 gap-2 justify-evenly">
            {cards.map((card) => (
                <div key={card.id} className="card" onClick={() => handleflip(card.id)}>
                    <div className={`card-inner ${flipped[card.id] ? 'flipped' : ''}`}>
                        <div className="card-front flex border-2 border-black rounded-2xl w-[180px] h-[180px] bg-blue-600/50">
                            <span>{card.front}</span></div>
                        <div className="card-back flex border-2 border-black rounded-2xl w-[180px] h-[180px] bg-fuchsia-900/50">
                            <span>{card.back}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CardDisplay;