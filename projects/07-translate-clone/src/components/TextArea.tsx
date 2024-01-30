import { Form } from "react-bootstrap";
import { SectionType } from "../types.d";

interface Props {
  loading?: boolean
  type: SectionType
  onChange: (value: string) => void
  value: string
}

const commonStyles = { border: 0, height: '200px', resize: 'none' }

const getPlaceholder = ({ type, loading }: { type: SectionType, loading?: boolean }) => {
  if (type === SectionType.From) return 'Introducir texto...'
  if (loading === true) return 'Cargando...'
  return 'Traducción'
}

export const TextArea = ({ type, loading, onChange, value }: Props) => {
  const styles = type === SectionType.From
    ? commonStyles
    : { ...commonStyles, backgroundColor: '#f8f9fa' }

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value)
  }

  return (
    <Form.Control
      as="textarea" // que elemento debe renderizar
      autoFocus={type === SectionType.From}
      placeholder={getPlaceholder({ type, loading })}
      style={styles}
      value={value}
      onChange={handleChange}
    />
  )
}
