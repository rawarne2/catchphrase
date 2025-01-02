import { useGame } from '../context/GameContext';
import { Timer } from './Timer';

export function GameScreen() {
  const { gameState, wordGuessed, passWord, reportViolation } = useGame();

  return (
    <div className='p-6 max-w-md mx-auto'>
      <div className='text-center mb-8'>
        <h3 className='text-xl text-gray-600 mb-2'>
          Category: {gameState.selectedCategory}
        </h3>
        <Timer />
        <div className='text-sm text-gray-500 mb-4'>
          Team {gameState.currentTeam}'s Turn
        </div>
      </div>

      {gameState.isWordVisible && (
        <div className='bg-white rounded-lg shadow-lg p-8 mb-8 text-center'>
          <h2 className='text-4xl font-bold text-gray-800'>
            {gameState.currentWord?.word}
          </h2>
        </div>
      )}

      <div className='grid gap-4'>
        <button
          onClick={wordGuessed}
          className='bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg'
        >
          Correct!
        </button>
        <button
          onClick={passWord}
          className='bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg'
        >
          Pass (-0.5)
        </button>
        <button
          onClick={reportViolation}
          className='bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg'
        >
          Said Word/Rhyme!
        </button>
      </div>
    </div>
  );
}
