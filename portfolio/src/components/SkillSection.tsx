import Card from "./UI/Card"
import { Skills} from '../Data';

const SkillSection = (props:{name:string, dataName:"FrontEnd"|"BackEnd"|"Cloud"|"OtherLanguages"|"OtherTech"}) => {
    return (<
        Card className='profile-detail-section skills-section'>
        <label>{props.name}</label>
        <ul>
            {Skills[props.dataName].map((item, index) => {
                return (
                    <li key={index}>
                        <h3>{item.name}</h3>
                        {/* <Rating name="read-only" value={item.proficiency} style={{ color: "rgb(97, 94, 233)" }} readOnly /> */}
                    </li>
                )
            })}

        </ul>
    </Card>)
}

export default SkillSection