import axios from "axios";
import * as fs from "fs";

interface Province {
  code: string;
  name: string;
}
interface City extends Province {
  provinceCode: string;
}

const fetch = async () => {
  const provinces: any[] = [];
  const data: any[] = [];
  const p = await axios.get("https://psgc.gitlab.io/api/provinces");
  p.data.forEach((element: Province) => {
    provinces.push({ code: element.code, name: element.name });
  });

  for (const province of provinces) {
    const city = await axios.get(
      `https://psgc.gitlab.io/api/provinces/${province.code}/cities-municipalities`
    );
    const cm = city.data.map(({ name }: City) => name);
    data.push({ province: province.name, CityOrMunicipalities: cm });
  }

  const newData = JSON.stringify(data);
  fs.writeFile("../frontend/src/data/Philippines.json", newData, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Saved");
    }
  });
};

fetch();
