import React from 'react'
import './assets/Home.css'
import Header from './components/Header'
import SellAndBuy from './components/SellAndBuy'
import IndustryPlants from './components/IndustryPlants'
import HowToBuy from './components/HowToBuy'
import AdditionalService from './components/AdditionalService'
import CustomersLove from './components/CustomersLove'
import BestSellingPlant from './components/BestSellingPlant'
import Blog from './components/Blog'
import Faq from './components/Faq'
import Affiliation from './components/Affiliation'
import FormIcon from './components/FormIcon'

export default function Home() {

  
  return (
    <div>
        <Header/>
        <SellAndBuy/>
        <IndustryPlants/>
        <HowToBuy/>
        <AdditionalService/>
        <BestSellingPlant/>
        <CustomersLove/>
        <Faq/>
        <Blog/>
        <Affiliation/>
      <FormIcon/>
    </div>
  )
}
