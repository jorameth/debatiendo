import React, { useState } from 'react'

import { XMarkIcon } from '@heroicons/react/24/outline'
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, IconButton, Input, Typography } from '@material-tailwind/react'
import { fetchApp } from './utils'

export interface UserData {
  username: string
  password: string
}

export default function Login({ open, setOpen, setUsuario }: any) {
  const [formData, setFormData] = useState<UserData>({
    username: '',
    password: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    fetchApp(
      '/login',
      { method: 'post', data: formData },
      (data) => {
        if (data.usuario && data.usuario.is_authenticated) {
          setUsuario(data.usuario)
          setOpen(false)
        }
      },
      (data) => alert(`Error: ${data}`),
    )
  }

  return (
    <Dialog placeholder='' onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} size='sm' open={open} handler={() => setOpen(false)} className='p-4'>
      <DialogHeader placeholder='' onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} className='relative m-0 block'>
        <Typography placeholder='' onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} variant='h4' color='blue-gray'>
          Identificarse
        </Typography>

        <IconButton placeholder='' onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} size='sm' variant='text' className='!absolute right-3.5 top-3.5' onClick={() => setOpen(false)}>
          <XMarkIcon className='h-4 w-4 stroke-2' />
        </IconButton>
      </DialogHeader>
      <DialogBody placeholder='' onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} className='space-y-4 pb-6'>
        <div>
          <Typography placeholder='' onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} variant='small' color='blue-gray' className='mb-2 text-left font-medium'>
            Usuario
          </Typography>
          <Input
            crossOrigin={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            color='gray'
            size='lg'
            value={formData.username}
            onChange={handleChange}
            placeholder='Usuario'
            name='username'
            className='placeholder:opacity-100 focus:!border-t-gray-900'
            containerProps={{
              className: '!min-w-full',
            }}
            labelProps={{
              className: 'hidden',
            }}
          />
        </div>

        <div>
          <Typography placeholder='' onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} variant='small' color='blue-gray' className='mb-2 text-left font-medium'>
            Contraseña
          </Typography>
          <Input
            type='password'
            crossOrigin={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            color='gray'
            size='lg'
            value={formData.password}
            onChange={handleChange}
            placeholder='Usuario'
            name='password'
            className='placeholder:opacity-100 focus:!border-t-gray-900'
            containerProps={{
              className: '!min-w-full',
            }}
            labelProps={{
              className: 'hidden',
            }}
          />
        </div>
      </DialogBody>
      <DialogFooter placeholder='' onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <Button placeholder='' onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} onClick={handleSubmit} className='ml-auto'>
          Enviar
        </Button>
      </DialogFooter>
    </Dialog>
  )
}
