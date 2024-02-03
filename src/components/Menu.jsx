import React from 'react'
import Card from './Card'

function Menu() {
  return (
    <>
    <div className='grid'>
    <Card  img='public\images\2.jpeg' title='Chole Bhature' price='$280'/>
    <Card  img='public\images\8.jpeg' title='Masala Dosa' price='$250'/>
    <Card  img='public\images\7.jpeg' title='Butter Paneer' price='$350'/>
    <Card  img='public\images\3.jpeg' title='Masasa' price='$280'/>
    <Card  img='public\images\5.jpeg' title='Masaosa' price='$280'/>
    <Card  img='public\images\4.jpeg' title='Masaosa' price='$280'/>
    </div>
    </>
  )
}

export default Menu
