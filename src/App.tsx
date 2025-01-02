import { GameProvider } from './context/GameContext';
import { useGame } from './context/GameContext';
import { CategorySelection } from './components/CategorySelection';
import { GameScreen } from './components/GameScreen';
import { TurnTransition } from './components/TurnTransition';
import { GameOver } from './components/GameOver';
// TODO: if the timer goes off when your team has the phone, the other team gets the point.
//     if your team does not get a correct guess in 20 seconds, you lose a point.
function GameContent() {
  const { gameState } = useGame();

  return (
    <div className='min-h-screen bg-gray-100'>
      <header className='bg-white shadow-sm'>
        <div className='max-w-4xl mx-auto py-4 px-6'>
          <h1 className='text-3xl font-bold text-gray-800'>Catchphrase</h1>
          {gameState.gamePhase !== 'category_selection' && (
            <div className='flex justify-between mt-2 text-lg'>
              <span>Team 1: {gameState.team1Score}</span>
              <span>Team 2: {gameState.team2Score}</span>
            </div>
          )}
        </div>
      </header>

      <main className='max-w-4xl mx-auto py-8 px-6'>
        {gameState.gamePhase === 'category_selection' && <CategorySelection />}
        {gameState.gamePhase === 'playing' && <GameScreen />}
        {gameState.gamePhase === 'turn_transition' && <TurnTransition />}
        {gameState.gamePhase === 'game_over' && <GameOver />}
      </main>
    </div>
  );
}

function App() {
  return (
    <GameProvider>
      <GameContent />
    </GameProvider>
  );
}

export default App;
