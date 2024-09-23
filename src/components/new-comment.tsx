import React, { useState } from 'react'
import Image from 'next/image'
import { Button, Typography, Textarea } from '@material-tailwind/react'
import { fetchApp } from '@/app/utils'
import { IComment, IUser } from '@/app'

interface NewCommentProps {
  handleupdate: (element: IComment) => void
  userMe: IUser
  reply?: string | undefined
  setIsReply?: (value: boolean) => void
}

export function NewComment({ handleupdate,  userMe, reply, setIsReply }: NewCommentProps) {
  const [comentario, setComentario] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const currentSlug = window.location.pathname.split('/').pop()
    const formData = {
      usuario: '',
      debate: currentSlug,
      comentario: comentario,
    }

    fetchApp(
      `/debates/${currentSlug}`,
      { method: 'post', data: formData },
      (data) => {
        handleupdate(data.obj)
        setComentario('')
        setIsReply && setIsReply(false)
      },
      (data) => console.log(data),
    )
  }

  return (
    <div>
      <div className='flex !items-center gap-4'>
        {/* <div className='!m-0 h-full w-full max-h-[40px] max-w-[40px]'>
          <Image width={768} height={768} src={''} alt='Avatar' className='h-full rounded w-full object-cover object-center' />
        </div> */}
        <Typography placeholder='' onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} variant='small' className='font-bold flex items-center gap-2 !text-gray-900'>
          {userMe?.name}
        </Typography>
      </div>
      <div className='flex-col mt-4 pl-14 h-full'>
        <form onSubmit={handleSubmit} className='flex flex-col items-end'>
          <Textarea
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            onChange={(e) => setComentario(e.target.value)}
            value={comentario}
            label='Tu Comentario'
            variant='static'
            placeholder='Escribe un comentario. Respeta las reglas de cotesía'
          />
          <Button placeholder='' onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} onClick={handleSubmit} color='gray' className='mt-2' size='md'>
            Enviar
          </Button>
        </form>
      </div>
    </div>
  )
}
