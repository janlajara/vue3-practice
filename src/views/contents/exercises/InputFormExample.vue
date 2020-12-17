<template>
    <div>
        <label>Message:</label> 
        <input v-model="message" placeholder="type here"/>{{message}}
    </div>
    <div>
        <label>Select a country:</label>
        <select v-model="selectedBloc">
            <option disabled value="">Select a bloc</option>
            <option v-for="(bloc, i) in blocs" :key="i" :value="bloc.code">
                {{ bloc.name }}
            </option>
        </select>
        <select v-model="selectedCountry">
            <option disabled value="">Select a country</option>
            <option v-for="(country, i) in countries" :key="i">
                {{country.name}}
            </option>
        </select>
        <button @click="clear">Clear</button>
        <div v-if="countryDetail">
            <label>Country Profile</label>
            <br/>
            <img :src="countryDetail.flag" style="max-height: 100px"/>
            <p>Name: {{countryDetail.name}}</p>
            <p>Capital: {{countryDetail.capital}}</p>
            <p>Region: {{countryDetail.region}}</p>
        </div>
    </div>
</template>

<script>
import {ref, watch} from 'vue'
const axios = require('axios')

const getCountriesByBloc = async (bloc) => {
    const response = await axios.get(`https://restcountries.eu/rest/v2/regionalbloc/${bloc}`)
    return response.data
}

const getCountryDetailsByName = async (country) => {
    const response = await axios.get(`https://restcountries.eu/rest/v2/name/${country}`)
    return response.data[0]
}

export default {
    setup() {
        const message = ref()
        const blocs = ref([
            {name: 'Association of Southeast Asian Nations', code: 'ASEAN'},
            {name: 'African Union', code: 'AU'},
            {name: 'Pacific Alliance', code: 'PA'},
            {name: 'European Union', code: 'EU'},
        ])
        let selectedBloc = ref()
        let countries = ref([])
        let selectedCountry = ref()
        let countryDetail = ref()

        const clearCountry = () => {
            selectedCountry.value = ''
            countryDetail.value = null
        }

        const clearBloc = () => {
            selectedBloc.value = ''
            countries.value = []
            clearCountry()
        }

        watch(()=> selectedBloc.value,
            async (code) => {
                if (code) {
                    countries.value = await getCountriesByBloc(code)
                    countryDetail.value = null
                }
            }
        )

        watch(()=> selectedCountry.value,
            async (country) => {
                countryDetail.value = await getCountryDetailsByName(country)
            }
        )      

        return {
            message, 
            selectedBloc,
            blocs,
            selectedCountry,
            countries,
            countryDetail,
            clear: clearBloc
        }
    }
}
</script>