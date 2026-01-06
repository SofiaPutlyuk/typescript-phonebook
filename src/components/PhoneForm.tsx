import {useSelector , useDispatch} from "react-redux"
import { RootState , AppDispatch } from "../redux/store"
import { getPhoneUser , postPhoneUser } from "../redux/thunk/phoneThunk"
export const PhoneForm = () => {
const info = useSelector((state:RootState) => state.phone.info )
console.log(info)
const dispatch = useDispatch<AppDispatch>()
    return(
        <form onSubmit={(e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget
        const name = (form.elements.namedItem("name") as HTMLInputElement).value
        const age = Number((form.elements.namedItem("age") as HTMLInputElement).value)
        const number = (form.elements.namedItem("number") as HTMLInputElement).value
        const city = (form.elements.namedItem("city") as HTMLInputElement).value
        dispatch(postPhoneUser({name, age,number,city}))
        }}>
            <label>
                <input type="text" name="name"/>
            </label>
              <label>
                <input type="number" name="age"/>
            </label>
              <label>
                <input type="text" name="number"/>
            </label>
              <label>
                <input type="text" name="city"/>
            </label>
            <button>Submit</button>
        </form>
    )
}