import React, { useEffect, useState } from 'react';
import { Select, Option } from "@material-tailwind/react";

export default function FontSelector() {
    const [fonts, setFonts] = useState([]);

    useEffect(() => {
        fetch('https://www.googleapis.com/webfonts/v1/webfonts?key=YOUR_API_KEY')
            .then(response => response.json())
            .then(data => setFonts(data.items));
    }, []);

    return (
        <Select label="Google Fonts" placeholder="Select a font">
            {fonts.map(font => (
                <Option key={font.family} value={font.family}>
                    {font.family}
                </Option>
            ))}
        </Select>
    );
}
