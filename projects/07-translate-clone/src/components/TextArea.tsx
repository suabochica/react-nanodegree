import { Form } from "react-bootstrap";
import { SectionType } from "../types.d";

interface Props {
    placeholder: string
    loading?: boolean
    type: SectionType
    onChange: (value: string) => void
    value: string
}

export const TextArea = ({type, placeholder, loading, onChange, value }: Props) => {
    return (
        <Form.Control
            as="textarea"
            autoFocus={type === SectionType.From}
            placeholder={placeholder}
            style={{ height: '150px', resize: 'none' }}
          />
    )
}

