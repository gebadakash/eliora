import phoneLogo from "../../public/images/phoneIcon.png";

const Phone = () => {
  return (
    <div className='fixed-bottom right-100 p-3' style={{zIndex:"6", left:"initial", animation:'effect 5s infinite ease-in', right:"4px", bottom:"150px"}}>
    <a href="tel:+918956101181" target='_blank'>
        <img src={phoneLogo}  width="55px" alt='phone'/>
    </a>
      
    </div>
  )
}
 

export default Phone
