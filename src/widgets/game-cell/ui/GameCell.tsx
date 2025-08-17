import { AnimatePresence } from 'framer-motion';
import { CellFront } from './CellFront';
import { CellBack } from './CellBack';
import { ButtonBase } from '@mui/material';
import { useGameCellTheme } from '../model';

interface GameCellProps {
  id: string;
  isWinning: boolean;
  isRevealed: boolean;
  disabled?: boolean;
  onFlip: (id: string) => void;
}
export const GameCell = ({ id, isWinning, isRevealed, disabled = false, onFlip }: GameCellProps) => {
  const cellTheme = useGameCellTheme(isWinning);

  const handleClick = () => {
    if (!disabled && !isRevealed) {
      onFlip(id);
    }
  };

  return (
    <ButtonBase
      key={id}
      role="gridcell"
      aria-label={`cell ${id}${isRevealed ? (isWinning ? ' - winning cell' : ' - losing cell') : ''}`}
      aria-pressed={isRevealed}
      disabled={disabled}
      onClick={handleClick}
      sx={{
        position: 'relative',
        width: '100%',
        aspectRatio: '1 / 1',
        borderRadius: 2,
        overflow: 'hidden',
        cursor: disabled || isRevealed ? 'default' : 'pointer',
        transition: 'all 0.2s ease',
        '&:hover':
          !disabled && !isRevealed
            ? {
                transform: 'translateY(-2px) scale(1.02)',
                boxShadow: (theme) => theme.shadows[4],
              }
            : undefined,
        '&:active':
          !disabled && !isRevealed
            ? {
                transform: 'translateY(0) scale(0.98)',
              }
            : undefined,
      }}
    >
      <AnimatePresence mode="wait">
        {!isRevealed ? <CellFront cellTheme={cellTheme} /> : <CellBack isWinning={isWinning} cellTheme={cellTheme} />}
      </AnimatePresence>
    </ButtonBase>
  );
};
