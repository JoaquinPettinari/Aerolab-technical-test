import { Divider, Grid } from "@mui/material";
import { useContext, useState } from "react";
import { HomePageContext } from "../../views/HomePage/HomePage";
import { AerolabButton } from "../AerolabButton/AerolabButton";
import { CreditCard } from "../CreditCard/CreditCard";

function PopoverContent() {
    const [selectedValue, setSelectedValue] = useState(1000)
    const { addCoints } = useContext(HomePageContext);
    const onChangeSelectedValue = (value: number) => {
        setSelectedValue(value)
    }

    const buyCoins = (value: number) => {
        addCoints(value)
    }

    return (
        <Grid container justifyContent={"center"} style={{ width: '300px' }}>
            <Grid item xs={12}>
                <p style={{ fontSize: '18px', fontWeight: '600', paddingLeft: '15px' }}>Add Balance</p>
            </Grid>
            <Grid item xs={12}>
                <Divider />
            </Grid>
            <Grid item xs={11}>
                <CreditCard />
            </Grid>
            <Grid container item justifyContent={"center"} xs={12} spacing={2} style={{ padding: '15px' }}>
                {[1000, 5000, 7500].map((value, index) => (
                    <Grid item xs={12} sm={4} key={index}>
                        <AerolabButton
                            onClick={() => onChangeSelectedValue(value)}
                            isSelected={selectedValue === value}
                            value={value}
                        />
                    </Grid>
                ))}
                <Grid item xs={12}>
                    <AerolabButton
                        onClick={() => buyCoins(selectedValue)}
                        isSelected
                        value={"Add points"}
                    />
                </Grid>
            </Grid>
        </Grid>

    )
}

export { PopoverContent };