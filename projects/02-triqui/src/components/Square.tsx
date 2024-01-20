export type SquareProps = {
  index: number
  children?: string
  updateBoard?: (index: number) => void
  isSelected?: boolean
}

export const Square = ({ children, isSelected, updateBoard, index }: SquareProps) => {
  const selectedClass: string = isSelected ? 'square is-selected' : 'square'

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
