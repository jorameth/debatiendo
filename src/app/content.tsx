'use client'

import React, { useEffect, useState } from 'react'
import { Input, Option, Select, Button, Dialog, Textarea, IconButton, Typography, DialogBody, DialogHeader, DialogFooter } from '@material-tailwind/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { fetchApp } from './utils'

export interface Data {
  success: boolean
  object_list: any
}

export interface Debate {
  id: string
  titulo?: string
  slug: string
  abierto: boolean
  descripcion: string
  creado: string
  actualizado: string
  acuerdo?: string
  password?: string
}

export function Content() {
  const [open, setOpen] = useState(false)
  const [debates, setDebates] = useState<Debate[]>([])

  const [formData, setFormData] = useState({
    titulo: '',
    descripcion: '',
    tipo: '1',
    password: '',
  })

  useEffect(() => {
    fetchApp(
      '/debates',
      {},
      (data: Data) => setDebates(data['object_list']),
      (data: Data) => console.log(data),
    )
  }, [])

  const handleOpen = () => setOpen(!open)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    fetchApp(
      '/debates',
      { method: 'post', data: formData },
      (data) => {
        setDebates([...debates, data.obj])
        setFormData({
          titulo: '',
          tipo: '1',
          descripcion: '',
          password: '',
        })
        setOpen(false)
      },
      (data) => alert(`Error: ${data}`),
    )
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log(e.target.name, e.target.value)

    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  const validateForm = () => {
    const valuesWithoutPassword = Object.fromEntries(Object.entries(formData).filter(([key]) => key !== 'password'))
    return Object.values(valuesWithoutPassword).every((value) => value !== '')
  }

  return (
    <section className='py-12 px-8'>
      <div className='mx-auto max-w-screen-md'>
        <Dialog placeholder='' onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} size='sm' open={open} handler={handleOpen} className='p-4'>
          <DialogHeader placeholder='' onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} className='relative m-0 block'>
            <Typography placeholder='' onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} variant='h4' color='blue-gray'>
              Agregar Debate
            </Typography>

            <IconButton placeholder='' onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} size='sm' variant='text' className='!absolute right-3.5 top-3.5' onClick={handleOpen}>
              <XMarkIcon className='h-4 w-4 stroke-2' />
            </IconButton>
          </DialogHeader>
          <DialogBody placeholder='' onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} className='space-y-4 pb-6'>
            <div>
              <Typography placeholder='' onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} variant='small' color='blue-gray' className='mb-2 text-left font-medium'>
                Nombre
              </Typography>
              <Input
                crossOrigin={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                color='gray'
                size='lg'
                value={formData.titulo}
                onChange={handleChange}
                placeholder='Nombre del Tema'
                name='titulo'
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
                Tipo
              </Typography>
              <Select
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                className='!w-full !border-[1.5px] !border-blue-gray-200/90 !border-t-blue-gray-200/90 bg-white text-gray-800 ring-4 ring-transparent placeholder:text-gray-600 focus:!border-primary focus:!border-t-blue-gray-900 group-hover:!border-primary'
                placeholder='1'
                name='tipo'
                value={formData.tipo}
                onChange={(e: any) =>
                  setFormData((prevData) => ({
                    ...prevData,
                    ['tipo']: e,
                  }))
                }
                labelProps={{ className: 'hidden' }}
              >
                <Option value='1'>Abierto</Option>
                <Option value='0'>Cerrado</Option>
              </Select>
            </div>
            <div className='flex gap-4'>
              <div className='w-full'>
                {formData.tipo === '0' && (
                  <>
                    <Typography placeholder='' onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} variant='small' color='blue-gray' className='mb-2 text-left font-medium'>
                      Clave de acceso
                    </Typography>
                    <Input color='gray' onPointerEnterCapture={undefined} crossOrigin={undefined} onPointerLeaveCapture={undefined} value={formData.password} onChange={handleChange} placeholder='********' label='Password' size='lg' />
                  </>
                )}
              </div>
            </div>
            <div>
              <Typography placeholder='' onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} variant='small' color='blue-gray' className='mb-2 text-left font-medium'>
                Descripción
              </Typography>
              <Textarea
                placeholder=''
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                rows={5}
                name='descripcion'
                value={formData.descripcion}
                onChange={handleChange}
                className='!w-full !border-[1.5px] !border-blue-gray-200/90 !border-t-blue-gray-200/90 bg-white text-gray-600 ring-4 ring-transparent focus:!border-primary focus:!border-t-blue-gray-900 group-hover:!border-primary'
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

        <div className='container mx-auto space-y-5 px-4 py-20'>
          <div className='w-full mb-10 md:flex items-center justify-between'>
            <div className='flex mb-5 md:mb-0 items-center gap-3'>
              <Button placeholder='' onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} size='sm' color='gray' variant='outlined'>
                Abiertas
              </Button>
              <Button placeholder='' onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} size='sm' color='gray' variant='outlined'>
                Cerradas
              </Button>
              <Button placeholder='' onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} size='sm' color='gray' variant='outlined'>
                Ver Todas
              </Button>
            </div>
            <div className='flex items-center gap-3'>
              <Button placeholder='' onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} onClick={handleOpen} color='blue' className='w-1/2 md:w-fit flex-shrink-0' size='md'>
                Crear Debate
              </Button>
            </div>
          </div>

          {debates?.map((t, i) => {
            return (
              <div key={i} className=' md:flex items-center justify-between'>
                <div className='mb-4 md:mb-0 md:flex items-center gap-5 max-w-2xl'>
                  <div>
                    <Typography placeholder='' onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} variant='h5' className='mb-4 md:mb-0' color='blue-gray'>
                      {t.titulo}
                    </Typography>
                    <Typography placeholder='' onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} className='w-full md:w-10/12 font-normal !text-gray-500'>
                      {t.descripcion}
                    </Typography>
                  </div>
                </div>
                <Button placeholder='' onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} color='gray' className='w-1/2 md:w-fit flex-shrink-0' size='md'>
                  <a href={`/debates/${t.slug}`}> Participar</a>
                </Button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Content
