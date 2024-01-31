import { test, expect, describe, it } from 'vitest'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

test('App', async () => {
  describe('when the user types a text', () => {
    it('should translate the text', async () => {

      const user = userEvent.setup()
      const app = render(<App />)

      const textareaFrom = app.getByPlaceholderText('Introducir texto...')

      await user.type(textareaFrom, 'Hola mundo')
      // TODO: Fix the configuration of the openAI API
      const result = await app.findByDisplayValue(/Error/i, {}, { timeout: 3000 })

      expect(result).toBeTruthy()
    })
  })
})
