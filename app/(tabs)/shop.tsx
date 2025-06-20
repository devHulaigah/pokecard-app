import '../../gesture-handler';
import { View, Text} from "react-native";
import Nav from "../../components/shopnav";
import Shoplist from "../../components/shoplist";

export default function Shop(){
    return(
        <View className="pt-20 flex-1 h-screen bg-slate-100">
            <Nav/>
            <Shoplist/>
        </View>
    )
}