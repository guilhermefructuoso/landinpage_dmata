import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'
import { IoMdPin } from 'react-icons/io'
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import './contato.css'
import { useForm } from 'react-hook-form'

function Contato() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => console.log(data)

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyB-pq9yyNxIIg8Z_ljFKxhfCqjmX6gkCKc',
    })


    const position = {
        lat: -23.704065,
        lng: -46.549599,
    }

    return (
        <section id="contato">
            <div className="main">
                <div className="contact">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label>Nome</label>
                        <input placeholder='Digite seu nome...'  {...register('name', { required: true })} />
                        {errors.name && <p>digite o nome antes de enviar.</p>}
                        <label>E-mail</label>
                        <input placeholder='Digite seu e-mail...' {...register('email', { required: true })} />
                        {errors.email && <p>digite o email antes de enviar.</p>}
                        <label>Telefone</label>
                        <input placeholder='Digite seu telefone...'   {...register('phone', { required: true })} />
                        {errors.phone && <p>digite o telefone antes de enviar.</p>}
                        <div className='msg'>
                        <label>Mensagem</label>
                        <textarea placeholder='Digite sua mensagem...' {...register('message')} />
                        </div>
                        <input type="submit" />
                    </form>
                </div>

                <div className="map">
                    {isLoaded ? (
                        <GoogleMap
                            mapContainerStyle={{
                                width: '100%',
                                height: '100%',
                            }}
                            center={position}
                            zoom={15}
                        >
                            <Marker position={position} />
                        </GoogleMap>
                    ) : (
                        <></>
                    )}
                    <div className="direction">
                        <span>
                            <IoMdPin color="#24c18c" /> R. Dom Paulo Mariano,
                            352 - Sala 22 - Nova Petrópolis, São Bernardo do
                            Campo
                        </span>
                        <span>
                            <FaEnvelope color="#24c18c" />{' '}
                            contato@estudiodmata.com.br
                        </span>
                        <span>
                            <FaPhoneAlt color="#24c18c" /> (11) 98630-5629
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contato
