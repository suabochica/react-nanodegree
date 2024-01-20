
type SquareProps = {
  children: string
  updateBoard?: (index: number) => void
  index: number
  isSelected?: boolean
}

export const Square = ({ children, isSelected, updateBoard, index }: SquareProps) => {
  const selectedClass = isSelected ? 'square is-selected' : 'square'
  const handleClick = () => {
    if (updateBoard) {
      updateBoard(index);
    }
  }

  return (
    <div className={selectedClass} onClick={handleClick}>
      {children}
    </div>
  )
}
