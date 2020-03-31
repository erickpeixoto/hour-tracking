import React from "react"
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng
} from "react-places-autocomplete"
import _ from 'lodash'
import { Container, Item, BoxItems, Loading, Input } from './styles'
import { Icon } from 'react-icons-kit'
import { location } from 'react-icons-kit/icomoon/location'


const  AutocompletePlaces = (props) => {

    const [address, setAddress] = React.useState("")
    const [coordinates, setCoordinates] = React.useState({
        lat: null,
        lng: null
    })

    const handleSelect = async value => {
        const results = await geocodeByAddress(value)
        const latLng = await getLatLng(results[0])
        setAddress(value)
        setCoordinates(latLng)
        _.get(props, 'handleSelect')(latLng)
    }

    const { placeholder } = props

    return (
      
            <PlacesAutocomplete
                value={address}
                onChange={setAddress}
                onSelect={handleSelect}
               >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <Container>   
                        
                    <Input {...getInputProps({ placeholder })} />

                        <BoxItems>
                        {loading ? <Loading>carregando...</Loading> : null}

                            {suggestions.map(suggestion => {
                                const style = {
                                    backgroundColor: suggestion.active ? "##e2e1e1" : "#fff"
                                }
                                return (
                                    <Item {...getSuggestionItemProps(suggestion, { style })}>
                                        <Icon icon={location} /> {suggestion.description}
                                    </Item>
                                )
                            })}
                        </BoxItems>
                    </Container>
                )}
            </PlacesAutocomplete>
     
    )
}

export default AutocompletePlaces