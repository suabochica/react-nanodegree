import { Badge, Button, Card, TextInput, Title } from '@tremor/react'

import { useUserActions } from '../hooks/user.actions.hook'
import { useState } from 'react'

export function CreateNewUser () {
  const { createUser } = useUserActions()
  const [result, setResult] = useState<'ok' | 'ko' | null>(null)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult(null)

    const form = event.target
    const formData = new FormData(form)

    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const github = formData.get('github') as string

    if (!name || !email || !github) {
      return setResult('ko')
    }

    createUser({ name, email, github })
    setResult('ok')

    form.reset()
  }

  return (
    <Card style={{marginTop: '16px'}}>
      <form onSubmit={handleSubmit} className="">
        <Title>Create New User</Title>
        <TextInput name="name" placeholder='your name' />
        <TextInput name="email" placeholder='your@email.com' />
        <TextInput name="github" placeholder="your github name tag" />
        <Button type="submit">Create User</Button>
        <span className='mx-4'>
          {result === 'ok' && <Badge color='green'>Usuario guardado</Badge>}
          {result === 'ko' && <Badge color='red'>Información incompleta</Badge>}
        </span>
      </form>
    </Card>
  )
}
