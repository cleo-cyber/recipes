import { useEffect,useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

function Recipe(){
    const [Details,setDetails]=useState({})
    const [activeTab,setActiveTab] = useState('Instructions');
    let params=useParams()
    const fetchDetails=async ()=>{
        const api=await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
        const data= await api.json();
        setDetails(data);
    }
    useEffect(()=>{
        fetchDetails()
    },[params.name]);
    return(
        <DetailWrapper>

            <div>
                <h2>{Details.title}</h2>
                <img src={ Details.image} alt="" />
            </div>
            <RecipeInfo>
            <Button className={activeTab==='Instructions'?'active':''} onClick={()=>setActiveTab('Instructions')}>Instructions</Button>
            <Button className={activeTab==='Ingredients'?'active':''} onClick={()=>setActiveTab('Ingredients')}>Ingredients</Button>
            <div>
                {/* Read html data from an api */}
                <h3 dangerouslySetInnerHTML={{__html:Details.summary}}></h3>
                <h3 dangerouslySetInnerHTML={{__html:Details.instructions}}></h3>
            </div>
            </RecipeInfo>
        </DetailWrapper>
    )
}

const DetailWrapper=styled.div`
margin-top:10rem;
margin-bottom:5rem;
display:flex;
.active{
    background:linear-gradient(35deg,#494949,#313131)
    color:white;
}
h2{
    margin-bottom:2rem;
}

li{
    fonts-size1.2rem;
    line-height:2.5rem;

}
ul{
    margin-top:2rem;
}
`
const Button =styled.button`
padding:1rem 2rem;
color:#313131;
background:white;
border:2px solid black;
margin-right:2rem;
font-weight:600;
`

const RecipeInfo=styled.div`
margin-left:10rem;
`
export default Recipe;