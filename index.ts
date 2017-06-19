export interface State {
    /**
     * A state or province's 2-letter ISO abbrevation.
     */
    iso: string;
    /**
     * The state or province's full name.
     */
    name: string;
}

export type Region = "Asia" | "Europe" | "Africa" | "Oceania" | "Americas" | "Antarctica";

export interface Country {
    /**
     * The country's 2-letter ISO abbreviation.
     */
    iso: string;
    /**
     * The country's full name.
     */
    name: string;
    /**
     * Whether the country has postal or ZIP codes.
     */
    hasPostalCodes: boolean;
    /**
     * The country's region or continent. Values can be "Asia", "Europe", "Africa", "Oceania", "Americas" or "Antarctica".
     */
    region: Region;
    /**
     * The country's states or provinces. Note: most countries do not have any states or provinces.
     */
    states: State[];
    /**
     * A regex to check if a given ZIP or postal code is a match for the country.
     */
    zipRegex: string | number;
}

export const countries: Country[] = [
    {
        "region": "Asia",
        "iso": "AF",
        "name": "Afghanistan",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Europe",
        "iso": "AX",
        "name": "Åland Islands",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Europe",
        "iso": "AL",
        "name": "Albania",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Africa",
        "iso": "DZ",
        "name": "Algeria",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Oceania",
        "iso": "AS",
        "name": "American Samoa",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Europe",
        "iso": "AD",
        "name": "Andorra",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(?:AD)*(\\d{3})$"
    },
    {
        "region": "Africa",
        "iso": "AO",
        "name": "Angola",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Americas",
        "iso": "AI",
        "name": "Anguilla",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(AI-2640)$"
    },
    {
        "region": "Antarctica",
        "iso": "AQ",
        "name": "Antarctica",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(7151)$"
    },
    {
        "region": "Americas",
        "iso": "AG",
        "name": "Antigua and Barbuda",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Americas",
        "iso": "AR",
        "name": "Argentina",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^([A-Z]\\d{4}[A-Z]{3})|([A-Z]\\d{4})$"
    },
    {
        "region": "Asia",
        "iso": "AM",
        "name": "Armenia",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Americas",
        "iso": "AW",
        "name": "Aruba",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": "^(0000 AW)$"
    },
    {
        "region": "Oceania",
        "iso": "AU",
        "name": "Australia",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Europe",
        "iso": "AT",
        "name": "Austria",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Asia",
        "iso": "AZ",
        "name": "Azerbaijan",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(AZ) (\\d{4})$"
    },
    {
        "region": "Americas",
        "iso": "BS",
        "name": "Bahamas",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Asia",
        "iso": "BH",
        "name": "Bahrain",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{3}\\d?)$"
    },
    {
        "region": "Asia",
        "iso": "BD",
        "name": "Bangladesh",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Americas",
        "iso": "BB",
        "name": "Barbados",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(?:BB)*(\\d{5})$"
    },
    {
        "region": "Europe",
        "iso": "BY",
        "name": "Belarus",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{6})$"
    },
    {
        "region": "Europe",
        "iso": "BE",
        "name": "Belgium",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Americas",
        "iso": "BZ",
        "name": "Belize",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Africa",
        "iso": "BJ",
        "name": "Benin",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Americas",
        "iso": "BM",
        "name": "Bermuda",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^([A-Z]{2} \\d{2})$"
    },
    {
        "region": "Asia",
        "iso": "BT",
        "name": "Bhutan",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Americas",
        "iso": "BO",
        "name": "Bolivia, Plurinational State of",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Americas",
        "iso": "BQ",
        "name": "Bonaire, Sint Eustatius and Saba",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(0000 BQ)$"
    },
    {
        "region": "Europe",
        "iso": "BA",
        "name": "Bosnia and Herzegovina",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Africa",
        "iso": "BW",
        "name": "Botswana",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Antarctica",
        "iso": "BV",
        "name": "Bouvet Island",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Americas",
        "iso": "BR",
        "name": "Brazil",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^[0-9]{5}-[0-9]{3}$"
    },
    {
        "region": "Africa",
        "iso": "IO",
        "name": "British Indian Ocean Territory",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(BB9D 1ZZ)$"
    },
    {
        "region": "Asia",
        "iso": "BN",
        "name": "Brunei Darussalam",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^([A-Z]{2}\\d{4})$"
    },
    {
        "region": "Europe",
        "iso": "BG",
        "name": "Bulgaria",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Africa",
        "iso": "BF",
        "name": "Burkina Faso",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Africa",
        "iso": "BI",
        "name": "Burundi",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Asia",
        "iso": "KH",
        "name": "Cambodia",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Africa",
        "iso": "CM",
        "name": "Cameroon",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Americas",
        "iso": "CA",
        "name": "Canada",
        "hasPostalCodes": true,
        "states": [
            {
                "iso": "AB",
                "name": "Alberta"
            },
            {
                "iso": "BC",
                "name": "British Columbia"
            },
            {
                "iso": "MB",
                "name": "Manitoba"
            },
            {
                "iso": "NB",
                "name": "New Brunswick"
            },
            {
                "iso": "NL",
                "name": "Newfoundland and Labrador"
            },
            {
                "iso": "NS",
                "name": "Nova Scotia"
            },
            {
                "iso": "NT",
                "name": "Northwest Territories"
            },
            {
                "iso": "NU",
                "name": "Nunavut"
            },
            {
                "iso": "ON",
                "name": "Ontario"
            },
            {
                "iso": "PE",
                "name": "Prince Edward Island"
            },
            {
                "iso": "QC",
                "name": "Quebec"
            },
            {
                "iso": "SK",
                "name": "Saskatchewan"
            },
            {
                "iso": "YT",
                "name": "Yukon"
            }
        ],
        "zipRegex": "^(?!.*[DFIOQU])[A-VXY][0-9][A-Z] +?[0-9][A-Z][0-9]$"
    },
    {
        "region": "Africa",
        "iso": "CV",
        "name": "Cape Verde",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Americas",
        "iso": "KY",
        "name": "Cayman Islands",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^[K][Y][0-9]{1}[-]([0-9]){4}$"
    },
    {
        "region": "Africa",
        "iso": "CF",{
    "region": "Asia",
    "iso": "AF",
    "name": "Afghanistan",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{4})$"
  },
  {
    "region": "Europe",
    "iso": "AX",
    "name": "Åland Islands",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{5})$"
  },
  {
    "region": "Europe",
    "iso": "AL",
    "name": "Albania",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{4})$"
  },
  {
    "region": "Africa",
    "iso": "DZ",
    "name": "American Samoa",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{5})$"
  },
  {
    "region": "Europe",
    "iso": "AD",
    "name": "Andorra",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(?:AD)*(\\d{3})$"
  },
  {
    "region": "Africa",
    "iso": "AO",
    "name": "Angola",
    "hasPostalCodes": false,
    "states": [],
    "zipRegex": ""
  },
  {
    "region": "Americas",
    "iso": "AI",
    "name": "Anguilla",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(AI-2640)$"
  },
  {
    "region": "Antarctica",
    "iso": "AQ",
    "name": "Antarctica",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(7151)$"
  },
  {
    "region": "Americas",
    "iso": "AG",
    "name": "Antigua and Barbuda",
    "hasPostalCodes": false,
    "states": [],
    "zipRegex": "^(\\d{5})$"
  },
  {
    "region": "Americas",
    "iso": "AR",
    "name": "Argentina",
    "hasPostalCodes": true,
    "states": [
      {
        "iso": "Buenos Aires",
        "name": "Buenos Aires"
      },
      {
        "iso": "Catamarca",
        "name": "Catamarca"
      },
      {
        "iso": "Chaco",
        "name": "Chaco"
      },
      {
        "iso": "Chubut",
        "name": "Chubut"
      },
      {
        "iso": "Ciudad Autónoma de Buenos Aires",
        "name": "Ciudad Autonoma de Buenos Aires"
      },
      {
        "iso": "Corrientes",
        "name": "Corrientes"
      },
      {
        "iso": "Córdoba",
        "name": "Cordoba"
      },
      {
        "iso": "Entre Ríos",
        "name": "Entre Rios"
      },
      {
        "iso": "Formosa",
        "name": "Formosa"
      },
      {
        "iso": "Jujuy",
        "name": "Jujuy"
      },
      {
        "iso": "La Pampa",
        "name": "La Pampa"
      },
      {
        "iso": "La Rioja",
        "name": "La Rioja"
      },
      {
        "iso": "Mendoza",
        "name": "Mendoza"
      },
      {
        "iso": "Misiones",
        "name": "Misiones"
      },
      {
        "iso": "Neuquén",
        "name": "Neuquen"
      },
      {
        "iso": "Río Negro",
        "name": "Rio Negro"
      },
      {
        "iso": "Salta",
        "name": "Salta"
      },
      {
        "iso": "San Juan",
        "name": "San Juan"
      },
      {
        "iso": "San Luis",
        "name": "San Luis"
      },
      {
        "iso": "Santa Cruz",
        "name": "Santa Cruz"
      },
      {
        "iso": "Santa Fe",
        "name": "Santa Fe"
      },
      {
        "iso": "Santiago del Estero",
        "name": "Santiago del Estero"
      },
      {
        "iso": "Tierra del Fuego, Antártida e Islas del Atlántico Sur",
        "name": "Tierra del Fuego, Antartida e Islas del Atlantico Sur"
      },
      {
        "iso": "Tucumán",
        "name": "Tucuman"
      }
    ],
    "zipRegex": "^([A-Z]\\d{4}[A-Z]{3})|([A-Z]\\d{4})$"
  },
  {
    "region": "Asia",
    "iso": "AM",
    "name": "Armenia",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{4})$"
  },
  {
    "region": "Americas",
    "iso": "AW",
    "name": "Aruba",
    "hasPostalCodes": false,
    "states": [],
    "zipRegex": "^(0000 AW)$"
  },
  {
    "region": "Oceania",
    "iso": "AU",
    "name": "Australia",
    "hasPostalCodes": true,
    "states": [
      {
        "iso": "Ashmore and Cartier Islands",
        "name": "Ashmore and Cartier Islands"
      },
      {
        "iso": "Australian Antarctic Territory",
        "name": "Australian Antarctic Territory"
      },
      {
        "iso": "ACT",
        "name": "Australian Capital Territory"
      },
      {
        "iso": "CX",
        "name": "Christmas Island"
      },
      {
        "iso": "CC",
        "name": "Cocos Islands"
      },
      {
        "iso": "Coral Sea Islands",
        "name": "Coral Sea Islands"
      },
      {
        "iso": "HM",
        "name": "Heard Island and McDonald Islands"
      },
      {
        "iso": "JBT",
        "name": "Jervis Bay Territory"
      },
      {
        "iso": "NSW",
        "name": "New South Wales"
      },
      {
        "iso": "NF",
        "name": "Norfolk Island"
      },
      {
        "iso": "NT",
        "name": "Northern Territory"
      },
      {
        "iso": "QLD",
        "name": "Queensland"
      },
      {
        "iso": "SA",
        "name": "South Australia"
      },
      {
        "iso": "TAS",
        "name": "Tasmania"
      },
      {
        "iso": "VIC",
        "name": "Victoria"
      },
      {
        "iso": "WA",
        "name": "Western Australia"
      }
    ],
    "zipRegex": "^(\\d{4})$"
  },
  {
    "region": "Europe",
    "iso": "AT",
    "name": "Austria",
    "hasPostalCodes": true,
    "states": [
      {
        "iso": "B",
        "name": "Burgenland"
      },
      {
        "iso": "K",
        "name": "Karnten"
      },
      {
        "iso": "NÖ",
        "name": "Niederosterreich"
      },
      {
        "iso": "OÖ",
        "name": "Oberosterreich"
      },
      {
        "iso": "S",
        "name": "Salzburg"
      },
      {
        "iso": "ST",
        "name": "Steiermark"
      },
      {
        "iso": "T",
        "name": "Tirol"
      },
      {
        "iso": "V",
        "name": "Vorarlberg"
      },
      {
        "iso": "W",
        "name": "Wien"
      }
    ],
    "zipRegex": "^(\\d{4})$"
  },
  {
    "region": "Asia",
    "iso": "AZ",
    "name": "Azerbaijan",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(AZ) (\\d{4})$"
  },
  {
    "region": "Americas",
    "iso": "BS",
    "name": "Bahamas",
    "hasPostalCodes": false,
    "states": [],
    "zipRegex": ""
  },
  {
    "region": "Asia",
    "iso": "BH",
    "name": "Bahrain",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{3}\\d?)$"
  },
  {
    "region": "Asia",
    "iso": "BD",
    "name": "Bangladesh",
    "hasPostalCodes": true,
    "states": [
      {
        "iso": "কক্সবাজার",
        "name": "Cox's Bazar"
      },
      {
        "iso": "কিশোরগঞ্জ",
        "name": "Kishoreganj"
      },
      {
        "iso": "কুড়িগ্রাম",
        "name": "Kurigram"
      },
      {
        "iso": "কুমিল্লা",
        "name": "Comilla"
      },
      {
        "iso": "কুষ্টিয়া",
        "name": "Kushtia"
      },
      {
        "iso": "খাগড়াছড়ি",
        "name": "Khagrachhari"
      },
      {
        "iso": "খুলনা",
        "name": "Khulna"
      },
      {
        "iso": "গাইবান্ধা",
        "name": "Gaibandha"
      },
      {
        "iso": "গাজীপুর",
        "name": "Gazipur"
      },
      {
        "iso": "গোপালগঞ্জ",
        "name": "Gopalganj"
      },
      {
        "iso": "চট্টগ্রাম",
        "name": "Chittagong"
      },
      {
        "iso": "চাঁদপুর",
        "name": "Chandpur"
      },
      {
        "iso": "চুয়াডাঙ্গা",
        "name": "Chuadanga"
      },
      {
        "iso": "জয়পুরহাট",
        "name": "Joypurhat"
      },
      {
        "iso": "জামালপুর",
        "name": "Jamalpur"
      },
      {
        "iso": "ঝালকাঠি",
        "name": "Jhalokati"
      },
      {
        "iso": "ঝিনাইদহ",
        "name": "Jhenaidah"
      },
      {
        "iso": "টাঙ্গাইল",
        "name": "Tangail"
      },
      {
        "iso": "ঠাকুরগাঁ",
        "name": "Thakurgaon"
      },
      {
        "iso": "ঢাকা",
        "name": "Dhaka"
      },
      {
        "iso": "দিনাজপুর",
        "name": "Dinajpur"
      },
      {
        "iso": "নওগাঁ",
        "name": "Naogaon"
      },
      {
        "iso": "নওয়াবগঞ্জ",
        "name": "Chapainawabganj"
      },
      {
        "iso": "নড়াইল",
        "name": "Narail"
      },
      {
        "iso": "নরসিংদী",
        "name": "Narsingdi"
      },
      {
        "iso": "নাটোর",
        "name": "Natore"
      },
      {
        "iso": "নারায়ণগঞ্জ",
        "name": "Narayanganj"
      },
      {
        "iso": "নীলফামারী",
        "name": "Nilphamari"
      },
      {
        "iso": "নেত্রকোনা",
        "name": "Netrakona"
      },
      {
        "iso": "নোয়াখালী",
        "name": "Noakhali"
      },
      {
        "iso": "পঞ্চগড়",
        "name": "Panchagarh"
      },
      {
        "iso": "পটুয়াখালী",
        "name": "Patuakhali"
      },
      {
        "iso": "পাবনা",
        "name": "Pabna"
      },
      {
        "iso": "পিরোজপুর",
        "name": "Pirojpur"
      },
      {
        "iso": "ফরিদপুর",
        "name": "Faridpur"
      },
      {
        "iso": "ফেনী",
        "name": "Feni"
      },
      {
        "iso": "বগুড়া",
        "name": "Bogra"
      },
      {
        "iso": "বরগুনা",
        "name": "Barguna"
      },
      {
        "iso": "বরিশাল",
        "name": "Barisal"
      },
      {
        "iso": "বাগেরহাট",
        "name": "Bagerhat"
      },
      {
        "iso": "বান্দরবান",
        "name": "Bandarban"
      },
      {
        "iso": "ব্রাহ্মণবাড়ীয়া",
        "name": "Brahmanbaria"
      },
      {
        "iso": "ভোলা",
        "name": "Bhola"
      },
      {
        "iso": "ময়মনসিংহ",
        "name": "Mymensingh"
      },
      {
        "iso": "মাগুরা",
        "name": "Magura"
      },
      {
        "iso": "মাদারীপুর",
        "name": "Madaripur"
      },
      {
        "iso": "মানিকগঞ্জ",
        "name": "Manikganj"
      },
      {
        "iso": "মুন্সীগঞ্জ",
        "name": "Munshiganj"
      },
      {
        "iso": "মেহেরপুর",
        "name": "Meherpur"
      },
      {
        "iso": "মৌলভীবাজার",
        "name": "Moulvibazar"
      },
      {
        "iso": "যশোর",
        "name": "Jessore"
      },
      {
        "iso": "রংপুর",
        "name": "Rangpur"
      },
      {
        "iso": "রাঙ্গামাটি",
        "name": "Rangamati"
      },
      {
        "iso": "রাজবাড়ী",
        "name": "Rajbari"
      },
      {
        "iso": "রাজশাহী",
        "name": "Rajshahi"
      },
      {
        "iso": "লক্ষীপুর",
        "name": "Lakshmipur"
      },
      {
        "iso": "লালমনিরহাট",
        "name": "Lalmonirhat"
      },
      {
        "iso": "শরীয়তপুর",
        "name": "Shariatpur"
      },
      {
        "iso": "শেরপুর",
        "name": "Sherpur"
      },
      {
        "iso": "সাতক্ষিরা",
        "name": "Satkhira"
      },
      {
        "iso": "সিরাজগঞ্জ",
        "name": "Sirajganj"
      },
      {
        "iso": "সিলেট",
        "name": "Sylhet"
      },
      {
        "iso": "সুনামগঞ্জ",
        "name": "Sunamganj"
      },
      {
        "iso": "হবিগঞ্জ",
        "name": "Habiganj"
      }
    ],
    "zipRegex": "^(\\d{4})$"
  },
  {
    "region": "Americas",
    "iso": "BB",
    "name": "Barbados",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(?:BB)*(\\d{5})$"
  },
  {
    "region": "Europe",
    "iso": "BY",
    "name": "Belarus",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{6})$"
  },
  {
    "region": "Europe",
    "iso": "BE",
    "name": "Belgium",
    "hasPostalCodes": true,
    "states": [
      {
        "iso": "ANT",
        "name": "Antwerpen"
      },
      {
        "iso": "HAI",
        "name": "Henegouwen"
      },
      {
        "iso": "LIM",
        "name": "Limburg"
      },
      {
        "iso": "LIE",
        "name": "Luik"
      },
      {
        "iso": "LUX",
        "name": "Luxemburg"
      },
      {
        "iso": "NAM",
        "name": "Namen"
      },
      {
        "iso": "OVL",
        "name": "Oost-Vlaanderen"
      },
      {
        "iso": "VBR",
        "name": "Vlaams-Brabant"
      },
      {
        "iso": "WBR",
        "name": "Waals-Brabant"
      },
      {
        "iso": "WVL",
        "name": "West-Vlaanderen"
      }
    ],
    "zipRegex": "^(\\d{4})$"
  },
  {
    "region": "Americas",
    "iso": "BZ",
    "name": "Belize",
    "hasPostalCodes": false,
    "states": [],
    "zipRegex": ""
  },
  {
    "region": "Africa",
    "iso": "BJ",
    "name": "Benin",
    "hasPostalCodes": false,
    "states": [],
    "zipRegex": ""
  },
  {
    "region": "Americas",
    "iso": "BM",
    "name": "Bermuda",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^([A-Z]{2} \\d{2})$"
  },
  {
    "region": "Asia",
    "iso": "BT",
    "name": "Bhutan",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{5})$"
  },
  {
    "region": "Americas",
    "iso": "BO",
    "name": "Bolivia, Plurinational State of",
    "hasPostalCodes": true,
    "states": [
      {
        "iso": "Abel Iturralde",
        "name": "Abel Iturralde"
      },
      {
        "iso": "Abuná",
        "name": "Abuna"
      },
      {
        "iso": "Alonso de Ibáñez",
        "name": "Alonso de Ibanez"
      },
      {
        "iso": "Andrés Ibáñez",
        "name": "Andres Ibanez"
      },
      {
        "iso": "Aniceto Arce",
        "name": "Aniceto Arce"
      },
      {
        "iso": "Antonio Quijarro",
        "name": "Antonio Quijarro"
      },
      {
        "iso": "Arani",
        "name": "Arani"
      },
      {
        "iso": "Aroma",
        "name": "Aroma"
      },
      {
        "iso": "Arque",
        "name": "Arque"
      },
      {
        "iso": "Atahuallpa",
        "name": "Atahuallpa"
      },
      {
        "iso": "Ayopaya",
        "name": "Ayopaya"
      },
      {
        "iso": "Azurduy",
        "name": "Azurduy"
      },
      {
        "iso": "Bautista Saavedra",
        "name": "Bautista Saavedra"
      },
      {
        "iso": "Belisario Boeto",
        "name": "Belisario Boeto"
      },
      {
        "iso": "Bernardino Bilbao",
        "name": "Bernardino Bilbao"
      },
      {
        "iso": "Bolívar",
        "name": "Bolivar"
      },
      {
        "iso": "Burnet O'Connor",
        "name": "Burnet O'Connor"
      },
      {
        "iso": "Campero",
        "name": "Campero"
      },
      {
        "iso": "Capinota",
        "name": "Capinota"
      },
      {
        "iso": "Caranavi",
        "name": "Caranavi"
      },
      {
        "iso": "Carangas",
        "name": "Carangas"
      },
      {
        "iso": "Carrasco",
        "name": "Carrasco"
      },
      {
        "iso": "Cercado",
        "name": "Cercado"
      },
      {
        "iso": "Cercado",
        "name": "Cercado"
      },
      {
        "iso": "Cercado",
        "name": "Cercado"
      },
      {
        "iso": "Cercado",
        "name": "Cercado"
      },
      {
        "iso": "Chapare",
        "name": "Chapare"
      },
      {
        "iso": "Charcas",
        "name": "Charcas"
      },
      {
        "iso": "Chayanta",
        "name": "Chayanta"
      },
      {
        "iso": "Chiquitos",
        "name": "Chiquitos"
      },
      {
        "iso": "Cordillera",
        "name": "Cordillera"
      },
      {
        "iso": "Cornelio Saavedra",
        "name": "Cornelio Saavedra"
      },
      {
        "iso": "Daniel Campos",
        "name": "Daniel Campos"
      },
      {
        "iso": "Eduardo Avaroa",
        "name": "Eduardo Avaroa"
      },
      {
        "iso": "Eliodoro Camacho",
        "name": "Eliodoro Camacho"
      },
      {
        "iso": "Enrique Baldivieso",
        "name": "Enrique Baldivieso"
      },
      {
        "iso": "Esteban Arce",
        "name": "Esteban Arce"
      },
      {
        "iso": "Eustaquio Méndez",
        "name": "Eustaquio Mendez"
      },
      {
        "iso": "Federico Román",
        "name": "Federico Roman"
      },
      {
        "iso": "Florida",
        "name": "Florida"
      },
      {
        "iso": "Franz Tamayo",
        "name": "Franz Tamayo"
      },
      {
        "iso": "Germán Busch",
        "name": "German Busch"
      },
      {
        "iso": "Germán Jordán",
        "name": "German Jordan"
      },
      {
        "iso": "Gran Chaco",
        "name": "Gran Chaco"
      },
      {
        "iso": "Gualberto Villarroel",
        "name": "Gualberto Villarroel"
      },
      {
        "iso": "Guarayos",
        "name": "Guarayos"
      },
      {
        "iso": "Hernando Siles",
        "name": "Hernando Siles"
      },
      {
        "iso": "Ichilo",
        "name": "Ichilo"
      },
      {
        "iso": "Ignacio Warnes",
        "name": "Ignacio Warnes"
      },
      {
        "iso": "Ingavi",
        "name": "Ingavi"
      },
      {
        "iso": "Inquisivi",
        "name": "Inquisivi"
      },
      {
        "iso": "Iténez",
        "name": "Itenez"
      },
      {
        "iso": "Jaime Zudáñez",
        "name": "Jaime Zudanez"
      },
      {
        "iso": "José Ballivián",
        "name": "Jose Ballivian"
      },
      {
        "iso": "José Manuel Pando",
        "name": "Jose Manuel Pando"
      },
      {
        "iso": "José María Avilés",
        "name": "Jose Maria Aviles"
      },
      {
        "iso": "José María Linares",
        "name": "Jose Maria Linares"
      },
      {
        "iso": "José Miguel de Velasco",
        "name": "Jose Miguel de Velasco"
      },
      {
        "iso": "Ladislao Cabrera",
        "name": "Ladislao Cabrera"
      },
      {
        "iso": "Larecaja",
        "name": "Larecaja"
      },
      {
        "iso": "Litoral",
        "name": "Litoral"
      },
      {
        "iso": "Loayza",
        "name": "Loayza"
      },
      {
        "iso": "Los Andes",
        "name": "Los Andes"
      },
      {
        "iso": "Luis Calvo",
        "name": "Luis Calvo"
      },
      {
        "iso": "Madre de Dios",
        "name": "Madre de Dios"
      },
      {
        "iso": "Mamoré",
        "name": "Mamore"
      },
      {
        "iso": "Manco Kapac",
        "name": "Manco Kapac"
      },
      {
        "iso": "Manuel María Caballero",
        "name": "Manuel Maria Caballero"
      },
      {
        "iso": "Manuripi",
        "name": "Manuripi"
      },
      {
        "iso": "Marbán",
        "name": "Marban"
      },
      {
        "iso": "Mizque",
        "name": "Mizque"
      },
      {
        "iso": "Modesto Omiste",
        "name": "Modesto Omiste"
      },
      {
        "iso": "Moxos",
        "name": "Moxos"
      },
      {
        "iso": "Murillo",
        "name": "Murillo"
      },
      {
        "iso": "Muñecas",
        "name": "Munecas"
      },
      {
        "iso": "Nicolás Suárez",
        "name": "Nicolas Suarez"
      },
      {
        "iso": "Nor Carangas",
        "name": "Nor Carangas"
      },
      {
        "iso": "Nor Chichas",
        "name": "Nor Chichas"
      },
      {
        "iso": "Nor Cinti",
        "name": "Nor Cinti"
      },
      {
        "iso": "Nor Lípez",
        "name": "Nor Lipez"
      },
      {
        "iso": "Nor Yungas",
        "name": "Nor Yungas"
      },
      {
        "iso": "Obispo Santistevan",
        "name": "Obispo Santistevan"
      },
      {
        "iso": "Omasuyos",
        "name": "Omasuyos"
      },
      {
        "iso": "Oropeza",
        "name": "Oropeza"
      },
      {
        "iso": "Pacajes",
        "name": "Pacajes"
      },
      {
        "iso": "Pantaléon Dalence",
        "name": "Pantaleon Dalence"
      },
      {
        "iso": "Poopó",
        "name": "Poopo"
      },
      {
        "iso": "Puerto de Mejillones",
        "name": "Puerto de Mejillones"
      },
      {
        "iso": "Punata",
        "name": "Punata"
      },
      {
        "iso": "Quillacollo",
        "name": "Quillacollo"
      },
      {
        "iso": "Rafael Bustillo",
        "name": "Rafael Bustillo"
      },
      {
        "iso": "Sajama",
        "name": "Sajama"
      },
      {
        "iso": "San Pedro de Totora",
        "name": "San Pedro de Totora"
      },
      {
        "iso": "Sara",
        "name": "Sara"
      },
      {
        "iso": "Saucarí",
        "name": "Saucari"
      },
      {
        "iso": "Sebastián Pagador",
        "name": "Sebastian Pagador"
      },
      {
        "iso": "Sud Carangas",
        "name": "Sud Carangas"
      },
      {
        "iso": "Sud Cinti",
        "name": "Sud Cinti"
      },
      {
        "iso": "Sud Yungas",
        "name": "Sud Yungas"
      },
      {
        "iso": "Sur Chichas",
        "name": "Sur Chichas"
      },
      {
        "iso": "Sur Lípez",
        "name": "Sur Lipez"
      },
      {
        "iso": "Tapacarí",
        "name": "Tapacari"
      },
      {
        "iso": "Tiraque",
        "name": "Tiraque"
      },
      {
        "iso": "Tomas Barrón",
        "name": "Tomas Barron"
      },
      {
        "iso": "Tomina",
        "name": "Tomina"
      },
      {
        "iso": "Tomás Frías",
        "name": "Tomas Frias"
      },
      {
        "iso": "Vaca Díez",
        "name": "Vaca Diez"
      },
      {
        "iso": "Vallegrande",
        "name": "Vallegrande"
      },
      {
        "iso": "Yacuma",
        "name": "Yacuma"
      },
      {
        "iso": "Yamparáez",
        "name": "Yamparaez"
      },
      {
        "iso": "Ángel Sandoval",
        "name": "Angel Sandoval"
      },
      {
        "iso": "Ñuflo de Chávez",
        "name": "Nuflo de Chavez"
      }
    ],
    "zipRegex": ""
  },
  {
    "region": "Americas",
    "iso": "BQ",
    "name": "Bonaire, Sint Eustatius and Saba",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(0000 BQ)$"
  },
  {
    "region": "Europe",
    "iso": "BA",
    "name": "Bosnia and Herzegovina",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{5})$"
  },
  {
    "region": "Africa",
    "iso": "BW",
    "name": "Botswana",
    "hasPostalCodes": false,
    "states": [],
    "zipRegex": ""
  },
  {
    "region": "Antarctica",
    "iso": "BV",
    "name": "Bouvet Island",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": ""
  },
  {
    "region": "Americas",
    "iso": "BR",
    "name": "Brazil",
    "hasPostalCodes": true,
    "states": [
      {
        "iso": "AC",
        "name": "Acre"
      },
      {
        "iso": "AL",
        "name": "Alagoas"
      },
      {
        "iso": "AP",
        "name": "Amapa"
      },
      {
        "iso": "AM",
        "name": "Amazonas"
      },
      {
        "iso": "BA",
        "name": "Bahia"
      },
      {
        "iso": "CE",
        "name": "Ceara"
      },
      {
        "iso": "DF",
        "name": "Distrito Federal"
      },
      {
        "iso": "ES",
        "name": "Espirito Santo"
      },
      {
        "iso": "GO",
        "name": "Goias"
      },
      {
        "iso": "MA",
        "name": "Maranhao"
      },
      {
        "iso": "MT",
        "name": "Mato Grosso"
      },
      {
        "iso": "MS",
        "name": "Mato Grosso do Sul"
      },
      {
        "iso": "MG",
        "name": "Minas Gerais"
      },
      {
        "iso": "PR",
        "name": "Parana"
      },
      {
        "iso": "PB",
        "name": "Paraiba"
      },
      {
        "iso": "PA",
        "name": "Para"
      },
      {
        "iso": "PE",
        "name": "Pernambuco"
      },
      {
        "iso": "PI",
        "name": "Piaui"
      },
      {
        "iso": "RN",
        "name": "Rio Grande do Norte"
      },
      {
        "iso": "RS",
        "name": "Rio Grande do Sul"
      },
      {
        "iso": "RJ",
        "name": "Rio de Janeiro"
      },
      {
        "iso": "RO",
        "name": "Rondonia"
      },
      {
        "iso": "RR",
        "name": "Roraima"
      },
      {
        "iso": "SC",
        "name": "Santa Catarina"
      },
      {
        "iso": "SE",
        "name": "Sergipe"
      },
      {
        "iso": "SP",
        "name": "Sao Paulo"
      },
      {
        "iso": "TO",
        "name": "Tocantins"
      }
    ],
    "zipRegex": "^[0-9]{5}-[0-9]{3}$"
  },
  {
    "region": "Africa",
    "iso": "IO",
    "name": "British Indian Ocean Territory",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(BB9D 1ZZ)$"
  },
  {
    "region": "Asia",
    "iso": "BN",
    "name": "Brunei Darussalam",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^([A-Z]{2}\\d{4})$"
  },
  {
    "region": "Europe",
    "iso": "BG",
    "name": "Bulgaria",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{4})$"
  },
  {
    "region": "Africa",
    "iso": "BF",
    "name": "Burkina Faso",
    "hasPostalCodes": false,
    "states": [],
    "zipRegex": ""
  },
  {
    "region": "Africa",
    "iso": "BI",
    "name": "Burundi",
    "hasPostalCodes": false,
    "states": [],
    "zipRegex": ""
  },
  {
    "region": "Asia",
    "iso": "KH",
    "name": "Cambodia",
    "hasPostalCodes": true,
    "states": [
      {
        "iso": "កណ្តាល",
        "name": "Kandal"
      },
      {
        "iso": "កែប",
        "name": "Kep"
      },
      {
        "iso": "កោះកុង",
        "name": "Koh Kong"
      },
      {
        "iso": "កំពង់ចាម",
        "name": "Kampong Cham"
      },
      {
        "iso": "កំពង់ឆ្នាំង",
        "name": "Kampong Chhnang"
      },
      {
        "iso": "កំពង់ធំ",
        "name": "Kampong Thom"
      },
      {
        "iso": "កំពង់ស្ពឺ",
        "name": "Kampong Speu"
      },
      {
        "iso": "កំពត",
        "name": "Kampot"
      },
      {
        "iso": "ក្រចេះ",
        "name": "Kratie"
      },
      {
        "iso": "តាកែវ",
        "name": "Takeo"
      },
      {
        "iso": "ត្បូងឃ្មុំ",
        "name": "Tbong Khmum"
      },
      {
        "iso": "បន្ទាយមានជ័យ",
        "name": "Banteay Meanchey"
      },
      {
        "iso": "បាត់ដំបង",
        "name": "Battambang"
      },
      {
        "iso": "បៃលិន",
        "name": "Pailin"
      },
      {
        "iso": "ពោធិ៍សាត់",
        "name": "Pursat"
      },
      {
        "iso": "ព្រៃវែង",
        "name": "Prey Veng"
      },
      {
        "iso": "ព្រះវិហារ",
        "name": "Preah Vihear"
      },
      {
        "iso": "ព្រះសីហនុ",
        "name": "Preah Sihanouk"
      },
      {
        "iso": "ភ្នំពេញ",
        "name": "Phnom Penh Municipality"
      },
      {
        "iso": "មណ្ឌលគីរី",
        "name": "Mondulkiri"
      },
      {
        "iso": "រតនគីរី",
        "name": "Ratanakiri"
      },
      {
        "iso": "សៀមរាប",
        "name": "Siem Reap"
      },
      {
        "iso": "ស្ទឹងត្រែង",
        "name": "Stung Treng"
      },
      {
        "iso": "ស្វាយរៀង",
        "name": "Svay Rieng"
      },
      {
        "iso": "ឧត្តរមានជ័យ",
        "name": "Oddar Meanchey"
      }
    ],
    "zipRegex": "^(\\d{5})$"
  },
  {
    "region": "Africa",
    "iso": "CM",
    "name": "Cameroon",
    "hasPostalCodes": false,
    "states": [],
    "zipRegex": ""
  },
  {
    "region": "Americas",
    "iso": "CA",
    "name": "Canada",
    "hasPostalCodes": true,
    "states": [
      {
        "iso": "AB",
        "name": "Alberta"
      },
      {
        "iso": "BC",
        "name": "British Columbia"
      },
      {
        "iso": "MB",
        "name": "Manitoba"
      },
      {
        "iso": "NB",
        "name": "New Brunswick"
      },
      {
        "iso": "NL",
        "name": "Newfoundland and Labrador"
      },
      {
        "iso": "NS",
        "name": "Nova Scotia"
      },
      {
        "iso": "NT",
        "name": "Northwest Territories"
      },
      {
        "iso": "NU",
        "name": "Nunavut"
      },
      {
        "iso": "ON",
        "name": "Ontario"
      },
      {
        "iso": "PE",
        "name": "Prince Edward Island"
      },
      {
        "iso": "QC",
        "name": "Quebec"
      },
      {
        "iso": "SK",
        "name": "Saskatchewan"
      },
      {
        "iso": "YT",
        "name": "Yukon"
      }
    ],
    "zipRegex": "^(?!.*[DFIOQU])[A-VXY][0-9][A-Z] +?[0-9][A-Z][0-9]$"
  },
  {
    "region": "Africa",
    "iso": "CV",
    "name": "Cape Verde",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{4})$"
  },
  {
    "region": "Americas",
    "iso": "KY",
    "name": "Cayman Islands",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^[K][Y][0-9]{1}[-]([0-9]){4}$"
  },
  {
    "region": "Africa",
    "iso": "CF",
    "name": "Central African Republic",
    "hasPostalCodes": false,
    "states": [],
    "zipRegex": ""
  },
  {
    "region": "Africa",
    "iso": "TD",
    "name": "Chad",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{5})$"
  },
  {
    "region": "Americas",
    "iso": "CL",
    "name": "Chile",
    "hasPostalCodes": true,
    "states": [
      {
        "iso": "Aisén",
        "name": "Aisen"
      },
      {
        "iso": "Antofagasta",
        "name": "Antofagasta"
      },
      {
        "iso": "Antártica Chilena",
        "name": "Antartica Chilena"
      },
      {
        "iso": "Arauco",
        "name": "Arauco"
      },
      {
        "iso": "Arica",
        "name": "Arica"
      },
      {
        "iso": "Biobío",
        "name": "Biobio"
      },
      {
        "iso": "Cachapoal",
        "name": "Cachapoal"
      },
      {
        "iso": "Capitan Prat",
        "name": "Capitan Prat"
      },
      {
        "iso": "Cardenal Caro",
        "name": "Cardenal Caro"
      },
      {
        "iso": "Cauquenes",
        "name": "Cauquenes"
      },
      {
        "iso": "Cautin",
        "name": "Cautin"
      },
      {
        "iso": "Chacabuco",
        "name": "Chacabuco"
      },
      {
        "iso": "Chañaral",
        "name": "Chanaral"
      },
      {
        "iso": "Chiloe",
        "name": "Chiloe"
      },
      {
        "iso": "Choapa",
        "name": "Choapa"
      },
      {
        "iso": "Coihaique",
        "name": "Coihaique"
      },
      {
        "iso": "Colchagua",
        "name": "Colchagua"
      },
      {
        "iso": "Concepción",
        "name": "Concepcion"
      },
      {
        "iso": "Copiapó",
        "name": "Copiapo"
      },
      {
        "iso": "Cordillera",
        "name": "Cordillera"
      },
      {
        "iso": "Curicó",
        "name": "Curico"
      },
      {
        "iso": "El Loa",
        "name": "El Loa"
      },
      {
        "iso": "Elqui",
        "name": "Elqui"
      },
      {
        "iso": "General Carrera",
        "name": "General Carrera"
      },
      {
        "iso": "Huasco",
        "name": "Huasco"
      },
      {
        "iso": "Iquique",
        "name": "Iquique"
      },
      {
        "iso": "Isla de Pascua",
        "name": "Isla de Pascua"
      },
      {
        "iso": "Limarí",
        "name": "Limari"
      },
      {
        "iso": "Linares",
        "name": "Linares"
      },
      {
        "iso": "Llanquihue",
        "name": "Llanquihue"
      },
      {
        "iso": "Los Andes",
        "name": "Los Andes"
      },
      {
        "iso": "Magallanes",
        "name": "Magallanes"
      },
      {
        "iso": "Maipo",
        "name": "Maipo"
      },
      {
        "iso": "Malleco",
        "name": "Malleco"
      },
      {
        "iso": "Marga Marga",
        "name": "Marga Marga"
      },
      {
        "iso": "Melipilla",
        "name": "Melipilla"
      },
      {
        "iso": "Osorno",
        "name": "Osorno"
      },
      {
        "iso": "Palena",
        "name": "Palena"
      },
      {
        "iso": "Parinacota",
        "name": "Parinacota"
      },
      {
        "iso": "Petorca",
        "name": "Petorca"
      },
      {
        "iso": "Quillota",
        "name": "Quillota"
      },
      {
        "iso": "Ranco",
        "name": "Ranco"
      },
      {
        "iso": "San Antonio",
        "name": "San Antonio"
      },
      {
        "iso": "San Felipe de Aconcagua",
        "name": "San Felipe de Aconcagua"
      },
      {
        "iso": "Santiago",
        "name": "Santiago"
      },
      {
        "iso": "Talagante",
        "name": "Talagante"
      },
      {
        "iso": "Talca",
        "name": "Talca"
      },
      {
        "iso": "Tamarugal",
        "name": "Tamarugal"
      },
      {
        "iso": "Tierra del Fuego",
        "name": "Tierra del Fuego"
      },
      {
        "iso": "Tocopilla",
        "name": "Tocopilla"
      },
      {
        "iso": "Ultima Esperanza",
        "name": "Ultima Esperanza"
      },
      {
        "iso": "Valdivia",
        "name": "Valdivia"
      },
      {
        "iso": "Valparaíso",
        "name": "Valparaiso"
      },
      {
        "iso": "Ñuble",
        "name": "Nuble"
      }
    ],
    "zipRegex": "^(\\d{7})$"
  },
  {
    "region": "Asia",
    "iso": "CN",
    "name": "China",
    "hasPostalCodes": true,
    "states": [
      {
        "iso": "沪",
        "name": "Shanghai"
      },
      {
        "iso": "滇",
        "name": "Yunnan"
      },
      {
        "iso": "蒙",
        "name": "Inner Mongolia"
      },
      {
        "iso": "京",
        "name": "Beijing"
      },
      {
        "iso": "台",
        "name": "Taiwan"
      },
      {
        "iso": "吉",
        "name": "Jilin"
      },
      {
        "iso": "川",
        "name": "sichuan"
      },
      {
        "iso": "津",
        "name": "Tianjin"
      },
      {
        "iso": "宁",
        "name": "Ningxia"
      },
      {
        "iso": "皖",
        "name": "Anhui"
      },
      {
        "iso": "鲁",
        "name": "Shandong"
      },
      {
        "iso": "晋",
        "name": "Shanxi"
      },
      {
        "iso": "粤",
        "name": "Guangdong"
      },
      {
        "iso": "桂",
        "name": "Guangxi"
      },
      {
        "iso": "新",
        "name": "Xinjiang"
      },
      {
        "iso": "苏",
        "name": "Jiangsu"
      },
      {
        "iso": "赣",
        "name": "Jiangxi"
      },
      {
        "iso": "冀",
        "name": "Hebei"
      },
      {
        "iso": "豫",
        "name": "Henan"
      },
      {
        "iso": "浙",
        "name": "Zhejiang"
      },
      {
        "iso": "琼",
        "name": "Hainan"
      },
      {
        "iso": "鄂",
        "name": "Hubei"
      },
      {
        "iso": "湘",
        "name": "Hunan"
      },
      {
        "iso": "澳",
        "name": "Macau"
      },
      {
        "iso": "甘",
        "name": "Gansu"
      },
      {
        "iso": "闽",
        "name": "Fujian"
      },
      {
        "iso": "藏",
        "name": "Xizang"
      },
      {
        "iso": "黔",
        "name": "Guizhou"
      },
      {
        "iso": "辽",
        "name": "Liaoning"
      },
      {
        "iso": "渝",
        "name": "Chongqing"
      },
      {
        "iso": "陕",
        "name": "Shaanxi"
      },
      {
        "iso": "青",
        "name": "Qinghai"
      },
      {
        "iso": "港",
        "name": "Hongkong"
      },
      {
        "iso": "黑",
        "name": "Heilongjiang"
      }
    ],
    "zipRegex": "^(\\d{6})$"
  },
  {
    "region": "Oceania",
    "iso": "CX",
    "name": "Christmas Island",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(6978)$"
  },
  {
    "region": "Oceania",
    "iso": "CC",
    "name": "Cocos (Keeling) Islands",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(6799 W3)$"
  },
  {
    "region": "Americas",
    "iso": "CO",
    "name": "Colombia",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{6})$"
  },
  {
    "region": "Africa",
    "iso": "KM",
    "name": "Comoros",
    "hasPostalCodes": false,
    "states": [],
    "zipRegex": ""
  },
  {
    "region": "Africa",
    "iso": "CG",
    "name": "Congo",
    "hasPostalCodes": false,
    "states": [],
    "zipRegex": ""
  },
  {
    "region": "Africa",
    "iso": "CD",
    "name": "Congo, the Democratic Republic of the",
    "hasPostalCodes": false,
    "states": [],
    "zipRegex": ""
  },
  {
    "region": "Oceania",
    "iso": "CK",
    "name": "Cook Islands",
    "hasPostalCodes": false,
    "states": [],
    "zipRegex": ""
  },
  {
    "region": "Americas",
    "iso": "CR",
    "name": "Costa Rica",
    "hasPostalCodes": true,
    "states": [
      {
        "iso": "Alajuela",
        "name": "Alajuela"
      },
      {
        "iso": "Cartago",
        "name": "Cartago"
      },
      {
        "iso": "Guanacaste",
        "name": "Guanacaste"
      },
      {
        "iso": "Heredia",
        "name": "Heredia"
      },
      {
        "iso": "Limón",
        "name": "Limon"
      },
      {
        "iso": "Puntarenas",
        "name": "Puntarenas"
      },
      {
        "iso": "San José",
        "name": "San Jose"
      }
    ],
    "zipRegex": "^(\\d{5})$"
  },
  {
    "region": "Africa",
    "iso": "CI",
    "name": "Côte d'Ivoire",
    "hasPostalCodes": false,
    "states": [],
    "zipRegex": ""
  },
  {
    "region": "Europe",
    "iso": "HR",
    "name": "Croatia",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(?:HR)*(\\d{5})$"
  },
  {
    "region": "Americas",
    "iso": "CU",
    "name": "Cuba",
    "hasPostalCodes": true,
    "states": [
      {
        "iso": "Artemisa",
        "name": "Artemisa"
      },
      {
        "iso": "Bayamo",
        "name": "Bayamo"
      },
      {
        "iso": "Camagüey",
        "name": "Camaguey"
      },
      {
        "iso": "Ciego de Ávila",
        "name": "Ciego de Avila"
      },
      {
        "iso": "Cienfuegos",
        "name": "Cienfuegos"
      },
      {
        "iso": "Guantánamo",
        "name": "Guantanamo"
      },
      {
        "iso": "Havana",
        "name": "Havana"
      },
      {
        "iso": "Holguín",
        "name": "Holguin"
      },
      {
        "iso": "Las Tunas",
        "name": "Las Tunas"
      },
      {
        "iso": "Matanzas",
        "name": "Matanzas"
      },
      {
        "iso": "Nueva Gerona",
        "name": "Nueva Gerona"
      },
      {
        "iso": "Pinar del Río",
        "name": "Pinar del Rio"
      },
      {
        "iso": "San José de las Lajas",
        "name": "San Jose de las Lajas"
      },
      {
        "iso": "Sancti Spíritus",
        "name": "Sancti Spiritus"
      },
      {
        "iso": "Santa Clara",
        "name": "Santa Clara"
      },
      {
        "iso": "Santiago de Cuba",
        "name": "Santiago de Cuba"
      }
    ],
    "zipRegex": "^(?:CP)*(\\d{5})$"
  },
  {
    "region": "Americas",
    "iso": "CW",
    "name": "Curaçao",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(0000 CW)$"
  },
  {
    "region": "Europe",
    "iso": "CY",
    "name": "Cyprus",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{4})$"
  },
  {
    "region": "Europe",
    "iso": "CZ",
    "name": "Czech Republic",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^[0-9]{3} [0-9]{2}$"
  },
  {
    "region": "Europe",
    "iso": "DK",
    "name": "Denmark",
    "hasPostalCodes": true,
    "states": [
      {
        "iso": "Hovedstaden",
        "name": "Hovedstaden"
      },
      {
        "iso": "Midtjylland",
        "name": "Midtjylland"
      },
      {
        "iso": "Nordjylland",
        "name": "Nordjylland"
      },
      {
        "iso": "Sjælland",
        "name": "Sjaelland"
      },
      {
        "iso": "Syddanmark",
        "name": "Syddanmark"
      }
    ],
    "zipRegex": "^(\\d{4})$"
  },
  {
    "region": "Africa",
    "iso": "DJ",
    "name": "Djibouti",
    "hasPostalCodes": false,
    "states": [],
    "zipRegex": ""
  },
  {
    "region": "Americas",
    "iso": "DM",
    "name": "Dominica",
    "hasPostalCodes": false,
    "states": [],
    "zipRegex": ""
  },
  {
    "region": "Americas",
    "iso": "DO",
    "name": "Dominican Republic",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{5})$"
  },
  {
    "region": "Americas",
    "iso": "EC",
    "name": "Ecuador",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{6})$"
  },
  {
    "region": "Africa",
    "iso": "EG",
    "name": "Egypt",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{5})$"
  },
  {
    "region": "Americas",
    "iso": "SV",
    "name": "El Salvador",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(01101)$"
  },
  {
    "region": "Africa",
    "iso": "GQ",
    "name": "Equatorial Guinea",
    "hasPostalCodes": false,
    "states": [],
    "zipRegex": ""
  },
  {
    "region": "Africa",
    "iso": "ER",
    "name": "Eritrea",
    "hasPostalCodes": false,
    "states": [],
    "zipRegex": ""
  },
  {
    "region": "Europe",
    "iso": "EE",
    "name": "Estonia",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{5})$"
  },
  {
    "region": "Africa",
    "iso": "ET",
    "name": "Ethiopia",
    "hasPostalCodes": true,
    "states": [
      {
        "iso": "Addis Ababa",
        "name": "Addis Ababa"
      },
      {
        "iso": "Afar Region",
        "name": "Afar Region"
      },
      {
        "iso": "Amhara Region",
        "name": "Amhara Region"
      },
      {
        "iso": "Benishangul-Gumuz",
        "name": "Benishangul-Gumuz"
      },
      {
        "iso": "Dire Dawa",
        "name": "Dire Dawa"
      },
      {
        "iso": "Gambela",
        "name": "Gambela"
      },
      {
        "iso": "Harari",
        "name": "Harari"
      },
      {
        "iso": "Oromia",
        "name": "Oromia"
      },
      {
        "iso": "Somali",
        "name": "Somali"
      },
      {
        "iso": "Southern Nations, Nationalities, and Peoples' Region",
        "name": "Southern Nations, Nationalities, and Peoples' Region"
      },
      {
        "iso": "Tigray Region",
        "name": "Tigray Region"
      }
    ],
    "zipRegex": "^(\\d{4})$"
  },
  {
    "region": "Americas",
    "iso": "FK",
    "name": "Falkland Islands (Malvinas)",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(FIQQ 1ZZ)$"
  },
  {
    "region": "Europe",
    "iso": "FO",
    "name": "Faroe Islands",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(?:FO)*(\\d{3})$"
  },
  {
    "region": "Oceania",
    "iso": "FJ",
    "name": "Fiji",
    "hasPostalCodes": false,
    "states": [],
    "zipRegex": ""
  },
  {
    "region": "Europe",
    "iso": "FI",
    "name": "Finland",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(?:FI)*(\\d{5})$"
  },
  {
    "region": "Europe",
    "iso": "FR",
    "name": "France",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{5})$"
  },
  {
    "region": "Americas",
    "iso": "GF",
    "name": "French Guiana",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^((973)\\d{2})$"
  },
  {
    "region": "Oceania",
    "iso": "PF",
    "name": "French Polynesia",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^((987)\\d{2})$"
  },
  {
    "region": "Antarctica",
    "iso": "TF",
    "name": "French Southern Territories",
    "hasPostalCodes": false,
    "states": [],
    "zipRegex": "^((984)\\d{2})$"
  },
  {
    "region": "Africa",
    "iso": "GA",
    "name": "Gabon",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": ""
  },
  {
    "region": "Africa",
    "iso": "GM",
    "name": "Gambia",
    "hasPostalCodes": false,
    "states": [],
    "zipRegex": ""
  },
  {
    "region": "Asia",
    "iso": "GE",
    "name": "Georgia",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{4})$"
  },
  {
    "region": "Europe",
    "iso": "DE",
    "name": "Germany",
    "hasPostalCodes": true,
    "states": [
      {
        "iso": "BW",
        "name": "Baden-Wurttemberg"
      },
      {
        "iso": "BY",
        "name": "Bayern"
      },
      {
        "iso": "BE",
        "name": "Berlin"
      },
      {
        "iso": "BB",
        "name": "Brandenburg"
      },
      {
        "iso": "HB",
        "name": "Bremen"
      },
      {
        "iso": "HH",
        "name": "Hamburg"
      },
      {
        "iso": "HE",
        "name": "Hessen"
      },
      {
        "iso": "MV",
        "name": "Mecklenburg-Vorpommern"
      },
      {
        "iso": "NI",
        "name": "Niedersachsen"
      },
      {
        "iso": "NW",
        "name": "Nordrhein-Westfalen"
      },
      {
        "iso": "RP",
        "name": "Rheinland-Pfalz"
      },
      {
        "iso": "SL",
        "name": "Saarland"
      },
      {
        "iso": "SN",
        "name": "Sachsen"
      },
      {
        "iso": "ST",
        "name": "Sachsen-Anhalt"
      },
      {
        "iso": "SH",
        "name": "Schleswig-Holstein"
      },
      {
        "iso": "TH",
        "name": "Thuringen"
      }
    ],
    "zipRegex": "^(\\d{5})$"
  },
  {
    "region": "Africa",
    "iso": "GH",
    "name": "Ghana",
    "hasPostalCodes": false,
    "states": [],
    "zipRegex": ""
  },
  {
    "region": "Europe",
    "iso": "GI",
    "name": "Gibraltar",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(GX11 1AA)$"
  },
  {
    "region": "Europe",
    "iso": "GR",
    "name": "Greece",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{3}) \\d{2}$"
  },
  {
    "region": "Americas",
    "iso": "GL",
    "name": "Greenland",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{4})$"
  },
  {
    "region": "Americas",
    "iso": "GD",
    "name": "Grenada",
    "hasPostalCodes": false,
    "states": [],
    "zipRegex": ""
  },
  {
    "region": "Americas",
    "iso": "GP",
    "name": "Guadeloupe",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^((971)[0-9][0-0])$"
  },
  {
    "region": "Oceania",
    "iso": "GU",
    "name": "Guam",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^((969)[1-3][0-2])$"
  },
  {
    "region": "Americas",
    "iso": "GT",
    "name": "Guatemala",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{5})$"
  },
  {
    "region": "Europe",
    "iso": "GG",
    "name": "Guernsey",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "((GY)([0-9][0-9A-HJKPS-UW]?|[A-HK-Y][0-9][0-9ABEHMNPRV-Y]?) [0-9][ABD-HJLNP-UW-Z]{2})"
  },
  {
    "region": "Africa",
    "iso": "GN",
    "name": "Guinea",
    "hasPostalCodes": false,
    "states": [],
    "zipRegex": "^(\\d{3})$"
  },
  {
    "region": "Africa",
    "iso": "GW",
    "name": "Guinea-Bissau",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{4})$"
  },
  {
    "region": "Americas",
    "iso": "GY",
    "name": "Guyana",
    "hasPostalCodes": false,
    "states": [],
    "zipRegex": ""
  },
  {
    "region": "Americas",
    "iso": "HT",
    "name": "Haiti",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(?:HT)*(\\d{4})$"
  },
  {
    "region": "Antarctica",
    "iso": "HM",
    "name": "Heard Island and McDonald Islands",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(7151)$"
  },
  {
    "region": "Europe",
    "iso": "VA",
    "name": "Holy See (Vatican City State)",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": -120
  },
  {
    "region": "Americas",
    "iso": "HN",
    "name": "Honduras",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{5})$"
  },
  {
    "region": "Asia",
    "iso": "HK",
    "name": "Hong Kong",
    "hasPostalCodes": false,
    "states": [],
    "zipRegex": "^(999077)$"
  },
  {
    "region": "Europe",
    "iso": "HU",
    "name": "Hungary",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{4})$"
  },
  {
    "region": "Europe",
    "iso": "IS",
    "name": "Iceland",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{3})$"
  },
  {
    "region": "Asia",
    "iso": "IN",
    "name": "India",
    "hasPostalCodes": true,
    "states": [
      {
        "iso": "AN",
        "name": "Andaman and Nicobar Islands"
      },
      {
        "iso": "AP",
        "name": "Andhra Pradesh"
      },
      {
        "iso": "AR",
        "name": "Arunachal Pradesh"
      },
      {
        "iso": "AS",
        "name": "Assam"
      },
      {
        "iso": "BR",
        "name": "Bihar"
      },
      {
        "iso": "CH",
        "name": "Chandigarh"
      },
      {
        "iso": "CT",
        "name": "Chhattisgarh"
      },
      {
        "iso": "DN",
        "name": "Dadra and Nagar Haveli"
      },
      {
        "iso": "DD",
        "name": "Daman and Diu"
      },
      {
        "iso": "GA",
        "name": "Goa"
      },
      {
        "iso": "GJ",
        "name": "Gujarat"
      },
      {
        "iso": "HR",
        "name": "Haryana"
      },
      {
        "iso": "HP",
        "name": "Himachal Pradesh"
      },
      {
        "iso": "JK",
        "name": "Jammu and Kashmir"
      },
      {
        "iso": "JH",
        "name": "Jharkhand"
      },
      {
        "iso": "KA",
        "name": "Karnataka"
      },
      {
        "iso": "KL",
        "name": "Kerala"
      },
      {
        "iso": "LD",
        "name": "Lakshadweep"
      },
      {
        "iso": "MP",
        "name": "Madhya Pradesh"
      },
      {
        "iso": "MH",
        "name": "Maharashtra"
      },
      {
        "iso": "MN",
        "name": "Manipur"
      },
      {
        "iso": "ML",
        "name": "Meghalaya"
      },
      {
        "iso": "MZ",
        "name": "Mizoram"
      },
      {
        "iso": "NL",
        "name": "Nagaland"
      },
      {
        "iso": "DL",
        "name": "National Capital Territory of Delhi"
      },
      {
        "iso": "OR",
        "name": "Odisha"
      },
      {
        "iso": "PY",
        "name": "Puducherry"
      },
      {
        "iso": "PB",
        "name": "Punjab"
      },
      {
        "iso": "RJ",
        "name": "Rajasthan"
      },
      {
        "iso": "SK",
        "name": "Sikkim"
      },
      {
        "iso": "TN",
        "name": "Tamil Nadu"
      },
      {
        "iso": "TG",
        "name": "Telangana"
      },
      {
        "iso": "TR",
        "name": "Tripura"
      },
      {
        "iso": "UP",
        "name": "Uttar Pradesh"
      },
      {
        "iso": "UT",
        "name": "Uttarakhand"
      },
      {
        "iso": "WB",
        "name": "West Bengal"
      }
    ],
    "zipRegex": "^(\\d{6})$"
  },
  {
    "region": "Asia",
    "iso": "ID",
    "name": "Indonesia",
    "hasPostalCodes": true,
    "states": [
      {
        "iso": "ID-BA",
        "name": "Bali"
      },
      {
        "iso": "ID-BB",
        "name": "Bangka–Belitung Islands"
      },
      {
        "iso": "ID-BT",
        "name": "Banten"
      },
      {
        "iso": "ID-BE",
        "name": "Bengkulu"
      },
      {
        "iso": "ID-JT",
        "name": "Central Java"
      },
      {
        "iso": "ID-KT",
        "name": "Central Kalimantan"
      },
      {
        "iso": "ID-ST",
        "name": "Central Sulawesi"
      },
      {
        "iso": "ID-JI",
        "name": "East Java"
      },
      {
        "iso": "ID-KI",
        "name": "East Kalimantan"
      },
      {
        "iso": "ID-NT",
        "name": "East Nusa Tenggara"
      },
      {
        "iso": "ID-GO",
        "name": "Gorontalo"
      },
      {
        "iso": "ID-JK",
        "name": "Jakarta Special Capital Region"
      },
      {
        "iso": "ID-JA",
        "name": "Jambi"
      },
      {
        "iso": "ID-LA",
        "name": "Lampung"
      },
      {
        "iso": "ID-MA",
        "name": "Maluku"
      },
      {
        "iso": "ID-KU",
        "name": "North Kalimantan"
      },
      {
        "iso": "ID-MU",
        "name": "North Maluku"
      },
      {
        "iso": "ID-SA",
        "name": "North Sulawesi"
      },
      {
        "iso": "ID-SU",
        "name": "North Sumatra"
      },
      {
        "iso": "ID-RI",
        "name": "Riau"
      },
      {
        "iso": "ID-KR",
        "name": "Riau Islands"
      },
      {
        "iso": "ID-KS",
        "name": "South Kalimantan"
      },
      {
        "iso": "ID-SN",
        "name": "South Sulawesi"
      },
      {
        "iso": "ID-SS",
        "name": "South Sumatra"
      },
      {
        "iso": "ID-SG",
        "name": "Southeast Sulawesi"
      },
      {
        "iso": "ID-AC",
        "name": "Special Region of Aceh"
      },
      {
        "iso": "ID-PA",
        "name": "Special Region of Papua"
      },
      {
        "iso": "ID-PB",
        "name": "Special Region of West Papua"
      },
      {
        "iso": "ID-YO",
        "name": "Special Region of Yogyakarta"
      },
      {
        "iso": "ID-JB",
        "name": "West Java"
      },
      {
        "iso": "ID-KB",
        "name": "West Kalimantan"
      },
      {
        "iso": "ID-NB",
        "name": "West Nusa Tenggara"
      },
      {
        "iso": "ID-SR",
        "name": "West Sulawesi"
      },
      {
        "iso": "ID-SB",
        "name": "West Sumatra"
      }
    ],
    "zipRegex": "^(\\d{5})$"
  },
  {
    "region": "Asia",
    "iso": "IR",
    "name": "Iran, Islamic Republic of",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^\\d{5}([\\-]\\d{5})?$"
  },
  {
    "region": "Asia",
    "iso": "IQ",
    "name": "Iraq",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{5})$"
  },
  {
    "region": "Europe",
    "iso": "IE",
    "name": "Ireland",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": ""
  },
  {
    "region": "Europe",
    "iso": "IM",
    "name": "Isle of Man",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "((IM)([0-9][0-9A-HJKPS-UW]?|[A-HK-Y][0-9][0-9ABEHMNPRV-Y]?) [0-9][ABD-HJLNP-UW-Z]{2})"
  },
  {
    "region": "Asia",
    "iso": "IL",
    "name": "Israel",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{5})$"
  },
  {
    "region": "Europe",
    "iso": "IT",
    "name": "Italy",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{5})$"
  },
  {
    "region": "Americas",
    "iso": "JM",
    "name": "Jamaica",
    "hasPostalCodes": false,
    "states": [],
    "zipRegex": "^((JM)[A-Z]{3,3}\\d{2,2})$"
  },
  {
    "region": "Asia",
    "iso": "JP",
    "name": "Japan",
    "hasPostalCodes": true,
    "states": [
      {
        "iso": "三重県",
        "name": "Mie"
      },
      {
        "iso": "京都府",
        "name": "Kyoto"
      },
      {
        "iso": "佐賀県",
        "name": "Saga"
      },
      {
        "iso": "兵庫県",
        "name": "Hyogo"
      },
      {
        "iso": "北海道",
        "name": "Hokkaido"
      },
      {
        "iso": "千葉県",
        "name": "Chiba"
      },
      {
        "iso": "和歌山県",
        "name": "Wakayama"
      },
      {
        "iso": "埼玉県",
        "name": "Saitama"
      },
      {
        "iso": "大分県",
        "name": "Oita"
      },
      {
        "iso": "大阪府",
        "name": "Osaka"
      },
      {
        "iso": "奈良県",
        "name": "Nara"
      },
      {
        "iso": "宮城県",
        "name": "Miyagi"
      },
      {
        "iso": "宮崎県",
        "name": "Miyazaki"
      },
      {
        "iso": "富山県",
        "name": "Toyama"
      },
      {
        "iso": "山口県",
        "name": "Yamaguchi"
      },
      {
        "iso": "山形県",
        "name": "Yamagata"
      },
      {
        "iso": "山梨県",
        "name": "Yamanashi"
      },
      {
        "iso": "岐阜県",
        "name": "Gifu"
      },
      {
        "iso": "岡山県",
        "name": "Okayama"
      },
      {
        "iso": "岩手県",
        "name": "Iwate"
      },
      {
        "iso": "島根県",
        "name": "Shimane"
      },
      {
        "iso": "広島県",
        "name": "Hiroshima"
      },
      {
        "iso": "徳島県",
        "name": "Tokushima"
      },
      {
        "iso": "愛媛県",
        "name": "Ehime"
      },
      {
        "iso": "愛知県",
        "name": "Aichi"
      },
      {
        "iso": "新潟県",
        "name": "Niigata"
      },
      {
        "iso": "東京都",
        "name": "Tokyo"
      },
      {
        "iso": "栃木県",
        "name": "Tochigi"
      },
      {
        "iso": "沖縄県",
        "name": "Okinawa"
      },
      {
        "iso": "滋賀県",
        "name": "Shiga"
      },
      {
        "iso": "熊本県",
        "name": "Kumamoto"
      },
      {
        "iso": "石川県",
        "name": "Ishikawa"
      },
      {
        "iso": "神奈川県",
        "name": "Kanagawa"
      },
      {
        "iso": "福井県",
        "name": "Fukui"
      },
      {
        "iso": "福岡県",
        "name": "Fukuoka"
      },
      {
        "iso": "福島県",
        "name": "Fukushima"
      },
      {
        "iso": "秋田県",
        "name": "Akita"
      },
      {
        "iso": "群馬県",
        "name": "Gunma"
      },
      {
        "iso": "茨城県",
        "name": "Ibaraki"
      },
      {
        "iso": "長崎県",
        "name": "Nagasaki"
      },
      {
        "iso": "長野県",
        "name": "Nagano"
      },
      {
        "iso": "青森県",
        "name": "Aomori"
      },
      {
        "iso": "静岡県",
        "name": "Shizuoka"
      },
      {
        "iso": "香川県",
        "name": "Kagawa"
      },
      {
        "iso": "高知県",
        "name": "Kochi"
      },
      {
        "iso": "鳥取県",
        "name": "Tottori"
      },
      {
        "iso": "鹿児島県",
        "name": "Kagoshima"
      }
    ],
    "zipRegex": "^(\\d{3}-\\d{4})$"
  },
  {
    "region": "Europe",
    "iso": "JE",
    "name": "Jersey",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "(JE)([0-9]\\d{1})"
  },
  {
    "region": "Asia",
    "iso": "JO",
    "name": "Jordan",
    "hasPostalCodes": true,
    "states": [
      {
        "iso": "Ajloun",
        "name": "Ajloun"
      },
      {
        "iso": "Amman",
        "name": "Amman"
      },
      {
        "iso": "Aqaba",
        "name": "Aqaba"
      },
      {
        "iso": "Balqa",
        "name": "Balqa"
      },
      {
        "iso": "Irbid",
        "name": "Irbid"
      },
      {
        "iso": "Jerash",
        "name": "Jerash"
      },
      {
        "iso": "Karak",
        "name": "Karak"
      },
      {
        "iso": "Ma'an",
        "name": "Ma'an"
      },
      {
        "iso": "Madaba",
        "name": "Madaba"
      },
      {
        "iso": "Mafraq",
        "name": "Mafraq"
      },
      {
        "iso": "Tafilah",
        "name": "Tafilah"
      },
      {
        "iso": "Zarqa",
        "name": "Zarqa"
      }
    ],
    "zipRegex": "^(\\d{5})$"
  },
  {
    "region": "Asia",
    "iso": "KZ",
    "name": "Kazakhstan",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{6})$"
  },
  {
    "region": "Africa",
    "iso": "KE",
    "name": "Kenya",
    "hasPostalCodes": false,
    "states": [],
    "zipRegex": "^(\\d{5})$"
  },
  {
    "region": "Oceania",
    "iso": "KI",
    "name": "Kiribati",
    "hasPostalCodes": false,
    "states": [],
    "zipRegex": ""
  },
  {
    "region": "Asia",
    "iso": "KP",
    "name": "Korea, Democratic People's Republic of",
    "hasPostalCodes": false,
    "states": [],
    "zipRegex": ""
  },
  {
    "region": "Asia",
    "iso": "KR",
    "name": "Korea, Republic of",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{3}[-]\\d{3})$"
  },
  {
    "region": "Asia",
    "iso": "KW",
    "name": "Kuwait",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{5})$"
  },
  {
    "region": "Asia",
    "iso": "KG",
    "name": "Kyrgyzstan",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{6})$"
  },
  {
    "region": "Asia",
    "iso": "LA",
    "name": "Lao People's Democratic Republic",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{5})$"
  },
  {
    "region": "Europe",
    "iso": "LV",
    "name": "Latvia",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^[L]{1}[V]{1}[-]([0-9]){4}$"
  },
  {
    "region": "Asia",
    "iso": "LB",
    "name": "Lebanon",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{4}(\\d{4})?)$"
  },
  {
    "region": "Africa",
    "iso": "LS",
    "name": "Lesotho",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{3})$"
  },
  {
    "region": "Africa",
    "iso": "LR",
    "name": "Liberia",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{4})$"
  },
  {
    "region": "Africa",
    "iso": "LY",
    "name": "Libya",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{5})$"
  },
  {
    "region": "Europe",
    "iso": "LI",
    "name": "Liechtenstein",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{4})$"
  },
  {
    "region": "Europe",
    "iso": "LT",
    "name": "Lithuania",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(?:LT)*(\\d{5})$"
  },
  {
    "region": "Europe",
    "iso": "LU",
    "name": "Luxembourg",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{4})$"
  },
  {
    "region": "Asia",
    "iso": "MO",
    "name": "Macao",
    "hasPostalCodes": false,
    "states": [],
    "zipRegex": ""
  },
  {
    "region": "Europe",
    "iso": "MK",
    "name": "Macedonia, the Former Yugoslav Republic of",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{4})$"
  },
  {
    "region": "Africa",
    "iso": "MG",
    "name": "Madagascar",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{3})$"
  },
  {
    "region": "Africa",
    "iso": "MW",
    "name": "Malawi",
    "hasPostalCodes": false,
    "states": [],
    "zipRegex": ""
  },
  {
    "region": "Asia",
    "iso": "MY",
    "name": "Malaysia",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{5})$"
  },
  {
    "region": "Asia",
    "iso": "MV",
    "name": "Maldives",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{5})$"
  },
  {
    "region": "Africa",
    "iso": "ML",
    "name": "Mali",
    "hasPostalCodes": false,
    "states": [],
    "zipRegex": ""
  },
  {
    "region": "Europe",
    "iso": "MT",
    "name": "Malta",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^[A-Z]{3} [0-9]{4}$"
  },
  {
    "region": "Oceania",
    "iso": "MH",
    "name": "Marshall Islands",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^((969)[6-7][0-9])$"
  },
  {
    "region": "Americas",
    "iso": "MQ",
    "name": "Martinique",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{5})$"
  },
  {
    "region": "Africa",
    "iso": "MR",
    "name": "Mauritania",
    "hasPostalCodes": false,
    "states": [],
    "zipRegex": ""
  },
  {
    "region": "Africa",
    "iso": "MU",
    "name": "Mauritius",
    "hasPostalCodes": false,
    "states": [],
    "zipRegex": "^([0-9A-Z]\\d{4})$"
  },
  {
    "region": "Africa",
    "iso": "YT",
    "name": "Mayotte",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{5})$"
  },
  {
    "region": "Americas",
    "iso": "MX",
    "name": "Mexico",
    "hasPostalCodes": true,
    "states": [
      {
        "iso": "AG",
        "name": "Aguascalientes"
      },
      {
        "iso": "BC",
        "name": "Baja California"
      },
      {
        "iso": "BS",
        "name": "Baja California Sur"
      },
      {
        "iso": "CM",
        "name": "Campeche"
      },
      {
        "iso": "CS",
        "name": "Chiapas"
      },
      {
        "iso": "CH",
        "name": "Chihuahua"
      },
      {
        "iso": "MX",
        "name": "Coahuila"
      },
      {
        "iso": "CL",
        "name": "Colima"
      },
      {
        "iso": "DG",
        "name": "Durango"
      },
      {
        "iso": "DF",
        "name": "Federal District"
      },
      {
        "iso": "GT",
        "name": "Guanajuato"
      },
      {
        "iso": "GR",
        "name": "Guerrero"
      },
      {
        "iso": "HG",
        "name": "Hidalgo"
      },
      {
        "iso": "JA",
        "name": "Jalisco"
      },
      {
        "iso": "ME",
        "name": "Mexico"
      },
      {
        "iso": "MI",
        "name": "Michoacan"
      },
      {
        "iso": "MO",
        "name": "Morelos"
      },
      {
        "iso": "NA",
        "name": "Nayarit"
      },
      {
        "iso": "NL",
        "name": "Nuevo Leon"
      },
      {
        "iso": "OA",
        "name": "Oaxaca"
      },
      {
        "iso": "PU",
        "name": "Puebla"
      },
      {
        "iso": "QE",
        "name": "Queretaro"
      },
      {
        "iso": "QR",
        "name": "Quintana Roo"
      },
      {
        "iso": "SL",
        "name": "San Luis Potosi"
      },
      {
        "iso": "SI",
        "name": "Sinaloa"
      },
      {
        "iso": "SO",
        "name": "Sonora"
      },
      {
        "iso": "TB",
        "name": "Tabasco"
      },
      {
        "iso": "TM",
        "name": "Tamaulipas"
      },
      {
        "iso": "TL",
        "name": "Tlaxcala"
      },
      {
        "iso": "VE",
        "name": "Veracruz"
      },
      {
        "iso": "YU",
        "name": "Yucatan"
      },
      {
        "iso": "ZA",
        "name": "Zacatecas"
      }
    ],
    "zipRegex": "^(\\d{5})$"
  },
  {
    "region": "Oceania",
    "iso": "FM",
    "name": "Micronesia, Federated States of",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{5})$"
  },
  {
    "region": "Europe",
    "iso": "MD",
    "name": "Moldova, Republic of",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(?:MD)*(\\d{4})$"
  },
  {
    "region": "Europe",
    "iso": "MC",
    "name": "Monaco",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{5})$"
  },
  {
    "region": "Asia",
    "iso": "MN",
    "name": "Mongolia",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{5})$"
  },
  {
    "region": "Europe",
    "iso": "ME",
    "name": "Montenegro",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{5})$"
  },
  {
    "region": "Americas",
    "iso": "MS",
    "name": "Montserrat",
    "hasPostalCodes": false,
    "states": [],
    "zipRegex": ""
  },
  {
    "region": "Africa",
    "iso": "MA",
    "name": "Morocco",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{5})$"
  },
  {
    "region": "Africa",
    "iso": "MZ",
    "name": "Mozambique",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{4})$"
  },
  {
    "region": "Asia",
    "iso": "MM",
    "name": "Myanmar",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{5})$"
  },
  {
    "region": "Africa",
    "iso": "NA",
    "name": "Namibia",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": ""
  },
  {
    "region": "Oceania",
    "iso": "NR",
    "name": "Nauru",
    "hasPostalCodes": false,
    "states": [],
    "zipRegex": ""
  },
  {
    "region": "Asia",
    "iso": "NP",
    "name": "Nepal",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{5})$"
  },
  {
    "region": "Europe",
    "iso": "NL",
    "name": "Netherlands",
    "hasPostalCodes": true,
    "states": [
      {
        "iso": "DR",
        "name": "Drenthe"
      },
      {
        "iso": "FL",
        "name": "Flevoland"
      },
      {
        "iso": "FR",
        "name": "Friesland"
      },
      {
        "iso": "GD",
        "name": "Gelderland"
      },
      {
        "iso": "GR",
        "name": "Groningen"
      },
      {
        "iso": "LB",
        "name": "Limburg"
      },
      {
        "iso": "NB",
        "name": "Noord-Brabant"
      },
      {
        "iso": "NH",
        "name": "Noord-Holland"
      },
      {
        "iso": "OV",
        "name": "Overijssel"
      },
      {
        "iso": "UT",
        "name": "Utrecht"
      },
      {
        "iso": "ZL",
        "name": "Zeeland"
      },
      {
        "iso": "ZH",
        "name": "Zuid-Holland"
      }
    ],
    "zipRegex": "[0-9]{4} [A-Z]{2}"
  },
  {
    "region": "Oceania",
    "iso": "NC",
    "name": "New Caledonia",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{5})$"
  },
  {
    "region": "Oceania",
    "iso": "NZ",
    "name": "New Zealand",
    "hasPostalCodes": true,
    "states": [
      {
        "iso": "Auckland",
        "name": "Auckland"
      },
      {
        "iso": "Canterbury",
        "name": "Canterbury"
      },
      {
        "iso": "Hawke's Bay",
        "name": "Hawke's Bay"
      },
      {
        "iso": "Marlborough",
        "name": "Marlborough"
      },
      {
        "iso": "Nelson",
        "name": "Nelson"
      },
      {
        "iso": "New Plymouth",
        "name": "New Plymouth"
      },
      {
        "iso": "Otago",
        "name": "Otago"
      },
      {
        "iso": "Southland",
        "name": "Southland"
      },
      {
        "iso": "Wellington",
        "name": "Wellington"
      },
      {
        "iso": "Westland",
        "name": "Westland"
      }
    ],
    "zipRegex": "^(\\d{4})$"
  },
  {
    "region": "Americas",
    "iso": "NI",
    "name": "Nicaragua",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{5})$"
  },
  {
    "region": "Africa",
    "iso": "NE",
    "name": "Niger",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{4})$"
  },
  {
    "region": "Africa",
    "iso": "NG",
    "name": "Nigeria",
    "hasPostalCodes": true,
    "states": [
      {
        "iso": "AB",
        "name": "Abia"
      },
      {
        "iso": "FC",
        "name": "Abuja"
      },
      {
        "iso": "AD",
        "name": "Adamawa"
      },
      {
        "iso": "AK",
        "name": "Akwa Ibom"
      },
      {
        "iso": "AN",
        "name": "Anambra"
      },
      {
        "iso": "BA",
        "name": "Bauchi"
      },
      {
        "iso": "BY",
        "name": "Bayelsa"
      },
      {
        "iso": "BE",
        "name": "Benue"
      },
      {
        "iso": "BO",
        "name": "Borno"
      },
      {
        "iso": "CR",
        "name": "Cross River"
      },
      {
        "iso": "DE",
        "name": "Delta"
      },
      {
        "iso": "EB",
        "name": "Ebonyi"
      },
      {
        "iso": "ED",
        "name": "Edo"
      },
      {
        "iso": "EK",
        "name": "Ekiti"
      },
      {
        "iso": "EN",
        "name": "Enugu"
      },
      {
        "iso": "GO",
        "name": "Gombe"
      },
      {
        "iso": "IM",
        "name": "Imo"
      },
      {
        "iso": "JI",
        "name": "Jigawa"
      },
      {
        "iso": "KD",
        "name": "Kaduna"
      },
      {
        "iso": "KN",
        "name": "Kano"
      },
      {
        "iso": "KT",
        "name": "Katsina"
      },
      {
        "iso": "KE",
        "name": "Kebbi"
      },
      {
        "iso": "KO",
        "name": "Kogi"
      },
      {
        "iso": "KW",
        "name": "Kwara"
      },
      {
        "iso": "LA",
        "name": "Lagos"
      },
      {
        "iso": "NA",
        "name": "Nasarawa"
      },
      {
        "iso": "NI",
        "name": "Niger"
      },
      {
        "iso": "OG",
        "name": "Ogun"
      },
      {
        "iso": "ON",
        "name": "Ondo"
      },
      {
        "iso": "OS",
        "name": "Osun"
      },
      {
        "iso": "OY",
        "name": "Oyo"
      },
      {
        "iso": "PL",
        "name": "Plateau"
      },
      {
        "iso": "RI",
        "name": "Rivers"
      },
      {
        "iso": "SO",
        "name": "Sokoto"
      },
      {
        "iso": "TA",
        "name": "Taraba"
      },
      {
        "iso": "YO",
        "name": "Yobe"
      },
      {
        "iso": "ZA",
        "name": "Zamfara"
      }
    ],
    "zipRegex": "^(\\d{6})$"
  },
  {
    "region": "Oceania",
    "iso": "NU",
    "name": "Niue",
    "hasPostalCodes": false,
    "states": [],
    "zipRegex": ""
  },
  {
    "region": "Oceania",
    "iso": "NF",
    "name": "Norfolk Island",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(2899)$"
  },
  {
    "region": "Oceania",
    "iso": "MP",
    "name": "Northern Mariana Islands",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{5})$"
  },
  {
    "region": "Europe",
    "iso": "NO",
    "name": "Norway",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{4})$"
  },
  {
    "region": "Asia",
    "iso": "OM",
    "name": "Oman",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{3})$"
  },
  {
    "region": "Asia",
    "iso": "PK",
    "name": "Pakistan",
    "hasPostalCodes": true,
    "states": [
      {
        "iso": "Azad Kashmir",
        "name": "Azad Kashmir"
      },
      {
        "iso": "Bahawalpur",
        "name": "Bahawalpur"
      },
      {
        "iso": "Bannu",
        "name": "Bannu"
      },
      {
        "iso": "Dera Ghazi Khan",
        "name": "Dera Ghazi Khan"
      },
      {
        "iso": "Dera Ismail Khan",
        "name": "Dera Ismail Khan"
      },
      {
        "iso": "F.A.T.A.",
        "name": "F.A.T.A."
      },
      {
        "iso": "Faisalabad",
        "name": "Faisalabad"
      },
      {
        "iso": "Gujranwala",
        "name": "Gujranwala"
      },
      {
        "iso": "Hazara",
        "name": "Hazara"
      },
      {
        "iso": "Hyderabad",
        "name": "Hyderabad"
      },
      {
        "iso": "Islamabad",
        "name": "Islamabad"
      },
      {
        "iso": "Kalat",
        "name": "Kalat"
      },
      {
        "iso": "Karachi",
        "name": "Karachi"
      },
      {
        "iso": "Kohat",
        "name": "Kohat"
      },
      {
        "iso": "Lahore",
        "name": "Lahore"
      },
      {
        "iso": "Larkana",
        "name": "Larkana"
      },
      {
        "iso": "Makran",
        "name": "Makran"
      },
      {
        "iso": "Malakand",
        "name": "Malakand"
      },
      {
        "iso": "Mardan",
        "name": "Mardan"
      },
      {
        "iso": "Mirpur Khas",
        "name": "Mirpur Khas"
      },
      {
        "iso": "Multan",
        "name": "Multan"
      },
      {
        "iso": "Nasirabad",
        "name": "Nasirabad"
      },
      {
        "iso": "Northern Areas",
        "name": "Northern Areas"
      },
      {
        "iso": "Peshawar",
        "name": "Peshawar"
      },
      {
        "iso": "Quetta",
        "name": "Quetta"
      },
      {
        "iso": "Rawalpindi",
        "name": "Rawalpindi"
      },
      {
        "iso": "Sahiwal",
        "name": "Sahiwal"
      },
      {
        "iso": "Sargodha",
        "name": "Sargodha"
      },
      {
        "iso": "Sibi",
        "name": "Sibi"
      },
      {
        "iso": "Sukkur",
        "name": "Sukkur"
      },
      {
        "iso": "Zhob",
        "name": "Zhob"
      }
    ],
    "zipRegex": "^(\\d{5})$"
  },
  {
    "region": "Oceania",
    "iso": "PW",
    "name": "Palau",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(96940)$"
  },
  {
    "region": "Asia",
    "iso": "PS",
    "name": "Palestine, State of",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{5})$"
  },
  {
    "region": "Americas",
    "iso": "PA",
    "name": "Panama",
    "hasPostalCodes": false,
    "states": [],
    "zipRegex": ""
  },
  {
    "region": "Oceania",
    "iso": "PG",
    "name": "Papua New Guinea",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{3})$"
  },
  {
    "region": "Americas",
    "iso": "PY",
    "name": "Paraguay",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{4})$"
  },
  {
    "region": "Americas",
    "iso": "PE",
    "name": "Peru",
    "hasPostalCodes": true,
    "states": [
      {
        "iso": "Abancay",
        "name": "Abancay"
      },
      {
        "iso": "Acobamba",
        "name": "Acobamba"
      },
      {
        "iso": "Acomayo",
        "name": "Acomayo"
      },
      {
        "iso": "Aija",
        "name": "Aija"
      },
      {
        "iso": "Alto Amazonas",
        "name": "Alto Amazonas"
      },
      {
        "iso": "Ambo",
        "name": "Ambo"
      },
      {
        "iso": "Andahuaylas",
        "name": "Andahuaylas"
      },
      {
        "iso": "Angaraes",
        "name": "Angaraes"
      },
      {
        "iso": "Anta",
        "name": "Anta"
      },
      {
        "iso": "Antabamba",
        "name": "Antabamba"
      },
      {
        "iso": "Antonio Raymondi",
        "name": "Antonio Raymondi"
      },
      {
        "iso": "Arequipa",
        "name": "Arequipa"
      },
      {
        "iso": "Ascope",
        "name": "Ascope"
      },
      {
        "iso": "Asunción",
        "name": "Asuncion"
      },
      {
        "iso": "Atalaya",
        "name": "Atalaya"
      },
      {
        "iso": "Ayabaca",
        "name": "Ayabaca"
      },
      {
        "iso": "Aymaraes",
        "name": "Aymaraes"
      },
      {
        "iso": "Azángaro",
        "name": "Azangaro"
      },
      {
        "iso": "Bagua",
        "name": "Bagua"
      },
      {
        "iso": "Barranca",
        "name": "Barranca"
      },
      {
        "iso": "Bellavista",
        "name": "Bellavista"
      },
      {
        "iso": "Bolognesi",
        "name": "Bolognesi"
      },
      {
        "iso": "Bolívar",
        "name": "Bolivar"
      },
      {
        "iso": "Bongará",
        "name": "Bongara"
      },
      {
        "iso": "Cajabamba",
        "name": "Cajabamba"
      },
      {
        "iso": "Cajamarca",
        "name": "Cajamarca"
      },
      {
        "iso": "Cajatambo",
        "name": "Cajatambo"
      },
      {
        "iso": "Calca",
        "name": "Calca"
      },
      {
        "iso": "Callao",
        "name": "Callao"
      },
      {
        "iso": "Camaná",
        "name": "Camana"
      },
      {
        "iso": "Canas",
        "name": "Canas"
      },
      {
        "iso": "Canchis",
        "name": "Canchis"
      },
      {
        "iso": "Candarave",
        "name": "Candarave"
      },
      {
        "iso": "Cangallo",
        "name": "Cangallo"
      },
      {
        "iso": "Canta",
        "name": "Canta"
      },
      {
        "iso": "Carabaya",
        "name": "Carabaya"
      },
      {
        "iso": "Caravelí",
        "name": "Caraveli"
      },
      {
        "iso": "Carhuaz",
        "name": "Carhuaz"
      },
      {
        "iso": "Carlos Fermín Fitzcarrald",
        "name": "Carlos Fermin Fitzcarrald"
      },
      {
        "iso": "Casma",
        "name": "Casma"
      },
      {
        "iso": "Castilla",
        "name": "Castilla"
      },
      {
        "iso": "Castrovirreyna",
        "name": "Castrovirreyna"
      },
      {
        "iso": "Caylloma",
        "name": "Caylloma"
      },
      {
        "iso": "Cañete",
        "name": "Canete"
      },
      {
        "iso": "Celendín",
        "name": "Celendin"
      },
      {
        "iso": "Chachapoyas",
        "name": "Chachapoyas"
      },
      {
        "iso": "Chanchamayo",
        "name": "Chanchamayo"
      },
      {
        "iso": "Chepén",
        "name": "Chepen"
      },
      {
        "iso": "Chiclayo",
        "name": "Chiclayo"
      },
      {
        "iso": "Chincha",
        "name": "Chincha"
      },
      {
        "iso": "Chincheros",
        "name": "Chincheros"
      },
      {
        "iso": "Chota",
        "name": "Chota"
      },
      {
        "iso": "Chucuito",
        "name": "Chucuito"
      },
      {
        "iso": "Chumbivilcas",
        "name": "Chumbivilcas"
      },
      {
        "iso": "Chupaca",
        "name": "Chupaca"
      },
      {
        "iso": "Churcampa",
        "name": "Churcampa"
      },
      {
        "iso": "Concepción",
        "name": "Concepcion"
      },
      {
        "iso": "Condesuyos",
        "name": "Condesuyos"
      },
      {
        "iso": "Condorcanqui",
        "name": "Condorcanqui"
      },
      {
        "iso": "Contralmirante Villar",
        "name": "Contralmirante Villar"
      },
      {
        "iso": "Contumazá",
        "name": "Contumaza"
      },
      {
        "iso": "Coronel Portillo",
        "name": "Coronel Portillo"
      },
      {
        "iso": "Corongo",
        "name": "Corongo"
      },
      {
        "iso": "Cotabambas",
        "name": "Cotabambas"
      },
      {
        "iso": "Cusco",
        "name": "Cusco"
      },
      {
        "iso": "Cutervo",
        "name": "Cutervo"
      },
      {
        "iso": "Daniel Alcídes Carrión",
        "name": "Daniel Alcides Carrion"
      },
      {
        "iso": "Datem del Marañón",
        "name": "Datem del Maranon"
      },
      {
        "iso": "Dos de Mayo",
        "name": "Dos de Mayo"
      },
      {
        "iso": "El Collao",
        "name": "El Collao"
      },
      {
        "iso": "El Dorado",
        "name": "El Dorado"
      },
      {
        "iso": "Espinar",
        "name": "Espinar"
      },
      {
        "iso": "Ferreñafe",
        "name": "Ferrenafe"
      },
      {
        "iso": "General Sánchez Cerro",
        "name": "General Sanchez Cerro"
      },
      {
        "iso": "Gran Chimú",
        "name": "Gran Chimu"
      },
      {
        "iso": "Grau",
        "name": "Grau"
      },
      {
        "iso": "Huacaybamba",
        "name": "Huacaybamba"
      },
      {
        "iso": "Hualgayoc",
        "name": "Hualgayoc"
      },
      {
        "iso": "Huallaga",
        "name": "Huallaga"
      },
      {
        "iso": "Huamalíes",
        "name": "Huamalies"
      },
      {
        "iso": "Huamanga",
        "name": "Huamanga"
      },
      {
        "iso": "Huanca Sancos",
        "name": "Huanca Sancos"
      },
      {
        "iso": "Huancabamba",
        "name": "Huancabamba"
      },
      {
        "iso": "Huancané",
        "name": "Huancane"
      },
      {
        "iso": "Huancavelica",
        "name": "Huancavelica"
      },
      {
        "iso": "Huancayo",
        "name": "Huancayo"
      },
      {
        "iso": "Huanta",
        "name": "Huanta"
      },
      {
        "iso": "Huaral",
        "name": "Huaral"
      },
      {
        "iso": "Huaraz",
        "name": "Huaraz"
      },
      {
        "iso": "Huari",
        "name": "Huari"
      },
      {
        "iso": "Huarmey",
        "name": "Huarmey"
      },
      {
        "iso": "Huarochirí",
        "name": "Huarochiri"
      },
      {
        "iso": "Huaura",
        "name": "Huaura"
      },
      {
        "iso": "Huaylas",
        "name": "Huaylas"
      },
      {
        "iso": "Huaytará",
        "name": "Huaytara"
      },
      {
        "iso": "Huánuco",
        "name": "Huanuco"
      },
      {
        "iso": "Ica",
        "name": "Ica"
      },
      {
        "iso": "Ilo",
        "name": "Ilo"
      },
      {
        "iso": "Islay",
        "name": "Islay"
      },
      {
        "iso": "Jauja",
        "name": "Jauja"
      },
      {
        "iso": "Jaén",
        "name": "Jaen"
      },
      {
        "iso": "Jorge Basadre",
        "name": "Jorge Basadre"
      },
      {
        "iso": "Julcán",
        "name": "Julcan"
      },
      {
        "iso": "Junín",
        "name": "Junin"
      },
      {
        "iso": "La Convención",
        "name": "La Convencion"
      },
      {
        "iso": "La Mar",
        "name": "La Mar"
      },
      {
        "iso": "La Unión",
        "name": "La Union"
      },
      {
        "iso": "Lamas",
        "name": "Lamas"
      },
      {
        "iso": "Lambayeque",
        "name": "Lambayeque"
      },
      {
        "iso": "Lampa",
        "name": "Lampa"
      },
      {
        "iso": "Lauricocha",
        "name": "Lauricocha"
      },
      {
        "iso": "Leoncio Prado",
        "name": "Leoncio Prado"
      },
      {
        "iso": "Lima",
        "name": "Lima"
      },
      {
        "iso": "Loreto",
        "name": "Loreto"
      },
      {
        "iso": "Lucanas",
        "name": "Lucanas"
      },
      {
        "iso": "Luya",
        "name": "Luya"
      },
      {
        "iso": "Manú",
        "name": "Manu"
      },
      {
        "iso": "Marañón",
        "name": "Maranon"
      },
      {
        "iso": "Mariscal Cáceres",
        "name": "Mariscal Caceres"
      },
      {
        "iso": "Mariscal Luzuriaga",
        "name": "Mariscal Luzuriaga"
      },
      {
        "iso": "Mariscal Nieto",
        "name": "Mariscal Nieto"
      },
      {
        "iso": "Mariscal Ramón Castilla",
        "name": "Mariscal Ramon Castilla"
      },
      {
        "iso": "Maynas",
        "name": "Maynas"
      },
      {
        "iso": "Melgar",
        "name": "Melgar"
      },
      {
        "iso": "Moho",
        "name": "Moho"
      },
      {
        "iso": "Morropón",
        "name": "Morropon"
      },
      {
        "iso": "Moyobamba",
        "name": "Moyobamba"
      },
      {
        "iso": "Nazca",
        "name": "Nazca"
      },
      {
        "iso": "Ocros",
        "name": "Ocros"
      },
      {
        "iso": "Otuzco",
        "name": "Otuzco"
      },
      {
        "iso": "Oxapampa",
        "name": "Oxapampa"
      },
      {
        "iso": "Oyón",
        "name": "Oyon"
      },
      {
        "iso": "Pacasmayo",
        "name": "Pacasmayo"
      },
      {
        "iso": "Pachitea",
        "name": "Pachitea"
      },
      {
        "iso": "Padre Abad",
        "name": "Padre Abad"
      },
      {
        "iso": "Paita",
        "name": "Paita"
      },
      {
        "iso": "Pallasca",
        "name": "Pallasca"
      },
      {
        "iso": "Palpa",
        "name": "Palpa"
      },
      {
        "iso": "Parinacochas",
        "name": "Parinacochas"
      },
      {
        "iso": "Paruro",
        "name": "Paruro"
      },
      {
        "iso": "Pasco",
        "name": "Pasco"
      },
      {
        "iso": "Pataz",
        "name": "Pataz"
      },
      {
        "iso": "Paucartambo",
        "name": "Paucartambo"
      },
      {
        "iso": "Picota",
        "name": "Picota"
      },
      {
        "iso": "Pisco",
        "name": "Pisco"
      },
      {
        "iso": "Piura",
        "name": "Piura"
      },
      {
        "iso": "Pomabamba",
        "name": "Pomabamba"
      },
      {
        "iso": "Puerto Inca",
        "name": "Puerto Inca"
      },
      {
        "iso": "Puno",
        "name": "Puno"
      },
      {
        "iso": "Purús",
        "name": "Purus"
      },
      {
        "iso": "Putumayo",
        "name": "Putumayo"
      },
      {
        "iso": "Páucar del Sara Sara",
        "name": "Paucar del Sara Sara"
      },
      {
        "iso": "Quispicanchi",
        "name": "Quispicanchi"
      },
      {
        "iso": "Recuay",
        "name": "Recuay"
      },
      {
        "iso": "Requena",
        "name": "Requena"
      },
      {
        "iso": "Rioja",
        "name": "Rioja"
      },
      {
        "iso": "Rodríguez de Mendoza",
        "name": "Rodriguez de Mendoza"
      },
      {
        "iso": "San Antonio de Putina",
        "name": "San Antonio de Putina"
      },
      {
        "iso": "San Ignacio",
        "name": "San Ignacio"
      },
      {
        "iso": "San Marcos",
        "name": "San Marcos"
      },
      {
        "iso": "San Martín",
        "name": "San Martin"
      },
      {
        "iso": "San Miguel",
        "name": "San Miguel"
      },
      {
        "iso": "San Pablo",
        "name": "San Pablo"
      },
      {
        "iso": "San Román",
        "name": "San Roman"
      },
      {
        "iso": "Sandia",
        "name": "Sandia"
      },
      {
        "iso": "Santa",
        "name": "Santa"
      },
      {
        "iso": "Santa Cruz",
        "name": "Santa Cruz"
      },
      {
        "iso": "Santiago de Chuco",
        "name": "Santiago de Chuco"
      },
      {
        "iso": "Satipo",
        "name": "Satipo"
      },
      {
        "iso": "Sechura",
        "name": "Sechura"
      },
      {
        "iso": "Sihuas",
        "name": "Sihuas"
      },
      {
        "iso": "Sucre",
        "name": "Sucre"
      },
      {
        "iso": "Sullana",
        "name": "Sullana"
      },
      {
        "iso": "Sánchez Carrión",
        "name": "Sanchez Carrion"
      },
      {
        "iso": "Tacna",
        "name": "Tacna"
      },
      {
        "iso": "Tahuamanu",
        "name": "Tahuamanu"
      },
      {
        "iso": "Talara",
        "name": "Talara"
      },
      {
        "iso": "Tambopata",
        "name": "Tambopata"
      },
      {
        "iso": "Tarata",
        "name": "Tarata"
      },
      {
        "iso": "Tarma",
        "name": "Tarma"
      },
      {
        "iso": "Tayacaja",
        "name": "Tayacaja"
      },
      {
        "iso": "Tocache",
        "name": "Tocache"
      },
      {
        "iso": "Trujillo",
        "name": "Trujillo"
      },
      {
        "iso": "Tumbes",
        "name": "Tumbes"
      },
      {
        "iso": "Ucayali",
        "name": "Ucayali"
      },
      {
        "iso": "Urubamba",
        "name": "Urubamba"
      },
      {
        "iso": "Utcubamba",
        "name": "Utcubamba"
      },
      {
        "iso": "Vilcas Huamán",
        "name": "Vilcas Huaman"
      },
      {
        "iso": "Virú",
        "name": "Viru"
      },
      {
        "iso": "Víctor Fajardo",
        "name": "Victor Fajardo"
      },
      {
        "iso": "Yarowilca",
        "name": "Yarowilca"
      },
      {
        "iso": "Yauli",
        "name": "Yauli"
      },
      {
        "iso": "Yauyos",
        "name": "Yauyos"
      },
      {
        "iso": "Yungay",
        "name": "Yungay"
      },
      {
        "iso": "Yunguyo",
        "name": "Yunguyo"
      },
      {
        "iso": "Zarumilla",
        "name": "Zarumilla"
      }
    ],
    "zipRegex": "^(\\d{5})$"
  },
  {
    "region": "Asia",
    "iso": "PH",
    "name": "Philippines",
    "hasPostalCodes": true,
    "states": [
      {
        "iso": "Abra",
        "name": "Abra"
      },
      {
        "iso": "Agusan del Norte",
        "name": "Agusan del Norte"
      },
      {
        "iso": "Agusan del Sur",
        "name": "Agusan del Sur"
      },
      {
        "iso": "Aklan",
        "name": "Aklan"
      },
      {
        "iso": "Albay",
        "name": "Albay"
      },
      {
        "iso": "Antique",
        "name": "Antique"
      },
      {
        "iso": "Apayao",
        "name": "Apayao"
      },
      {
        "iso": "Aurora",
        "name": "Aurora"
      },
      {
        "iso": "Basilan",
        "name": "Basilan"
      },
      {
        "iso": "Bataan",
        "name": "Bataan"
      },
      {
        "iso": "Batanes",
        "name": "Batanes"
      },
      {
        "iso": "Batangas",
        "name": "Batangas"
      },
      {
        "iso": "Benguet",
        "name": "Benguet"
      },
      {
        "iso": "Biliran",
        "name": "Biliran"
      },
      {
        "iso": "Bohol",
        "name": "Bohol"
      },
      {
        "iso": "Bukidnon",
        "name": "Bukidnon"
      },
      {
        "iso": "Bulacan",
        "name": "Bulacan"
      },
      {
        "iso": "Cagayan",
        "name": "Cagayan"
      },
      {
        "iso": "Camarines Norte",
        "name": "Camarines Norte"
      },
      {
        "iso": "Camarines Sur",
        "name": "Camarines Sur"
      },
      {
        "iso": "Camiguin",
        "name": "Camiguin"
      },
      {
        "iso": "Capiz",
        "name": "Capiz"
      },
      {
        "iso": "Catanduanes",
        "name": "Catanduanes"
      },
      {
        "iso": "Cavite",
        "name": "Cavite"
      },
      {
        "iso": "Cebu",
        "name": "Cebu"
      },
      {
        "iso": "Compostela Valley",
        "name": "Compostela Valley"
      },
      {
        "iso": "Cotabato",
        "name": "Cotabato"
      },
      {
        "iso": "Davao Occidental",
        "name": "Davao Occidental"
      },
      {
        "iso": "Davao Oriental",
        "name": "Davao Oriental"
      },
      {
        "iso": "Davao del Norte",
        "name": "Davao del Norte"
      },
      {
        "iso": "Davao del Sur",
        "name": "Davao del Sur"
      },
      {
        "iso": "Dinagat Islands",
        "name": "Dinagat Islands"
      },
      {
        "iso": "Eastern Samar",
        "name": "Eastern Samar"
      },
      {
        "iso": "Guimaras",
        "name": "Guimaras"
      },
      {
        "iso": "Ifugao",
        "name": "Ifugao"
      },
      {
        "iso": "Ilocos Norte",
        "name": "Ilocos Norte"
      },
      {
        "iso": "Ilocos Sur",
        "name": "Ilocos Sur"
      },
      {
        "iso": "Iloilo",
        "name": "Iloilo"
      },
      {
        "iso": "Isabela",
        "name": "Isabela"
      },
      {
        "iso": "Kalinga",
        "name": "Kalinga"
      },
      {
        "iso": "La Union",
        "name": "La Union"
      },
      {
        "iso": "Laguna",
        "name": "Laguna"
      },
      {
        "iso": "Lanao del Norte",
        "name": "Lanao del Norte"
      },
      {
        "iso": "Lanao del Sur",
        "name": "Lanao del Sur"
      },
      {
        "iso": "Leyte",
        "name": "Leyte"
      },
      {
        "iso": "Maguindanao",
        "name": "Maguindanao"
      },
      {
        "iso": "Marinduque",
        "name": "Marinduque"
      },
      {
        "iso": "Masbate",
        "name": "Masbate"
      },
      {
        "iso": "Metro Manila",
        "name": "Metro Manila"
      },
      {
        "iso": "Misamis Occidental",
        "name": "Misamis Occidental"
      },
      {
        "iso": "Misamis Oriental",
        "name": "Misamis Oriental"
      },
      {
        "iso": "Mountain Province",
        "name": "Mountain Province"
      },
      {
        "iso": "Negros Occidental",
        "name": "Negros Occidental"
      },
      {
        "iso": "Negros Oriental",
        "name": "Negros Oriental"
      },
      {
        "iso": "Northern Samar",
        "name": "Northern Samar"
      },
      {
        "iso": "Nueva Ecija",
        "name": "Nueva Ecija"
      },
      {
        "iso": "Nueva Vizcaya",
        "name": "Nueva Vizcaya"
      },
      {
        "iso": "Occidental Mindoro",
        "name": "Occidental Mindoro"
      },
      {
        "iso": "Oriental Mindoro",
        "name": "Oriental Mindoro"
      },
      {
        "iso": "Palawan",
        "name": "Palawan"
      },
      {
        "iso": "Pampanga",
        "name": "Pampanga"
      },
      {
        "iso": "Pangasinan",
        "name": "Pangasinan"
      },
      {
        "iso": "Quezon",
        "name": "Quezon"
      },
      {
        "iso": "Quirino",
        "name": "Quirino"
      },
      {
        "iso": "Rizal",
        "name": "Rizal"
      },
      {
        "iso": "Romblon",
        "name": "Romblon"
      },
      {
        "iso": "Samar",
        "name": "Samar"
      },
      {
        "iso": "Sarangani",
        "name": "Sarangani"
      },
      {
        "iso": "Siquijor",
        "name": "Siquijor"
      },
      {
        "iso": "Sorsogon",
        "name": "Sorsogon"
      },
      {
        "iso": "South Cotabato",
        "name": "South Cotabato"
      },
      {
        "iso": "Southern Leyte",
        "name": "Southern Leyte"
      },
      {
        "iso": "Sultan Kudarat",
        "name": "Sultan Kudarat"
      },
      {
        "iso": "Sulu",
        "name": "Sulu"
      },
      {
        "iso": "Surigao del Norte",
        "name": "Surigao del Norte"
      },
      {
        "iso": "Surigao del Sur",
        "name": "Surigao del Sur"
      },
      {
        "iso": "Tarlac",
        "name": "Tarlac"
      },
      {
        "iso": "Tawi-Tawi",
        "name": "Tawi-Tawi"
      },
      {
        "iso": "Zambales",
        "name": "Zambales"
      },
      {
        "iso": "Zamboanga Sibugay",
        "name": "Zamboanga Sibugay"
      },
      {
        "iso": "Zamboanga del Norte",
        "name": "Zamboanga del Norte"
      },
      {
        "iso": "Zamboanga del Sur",
        "name": "Zamboanga del Sur"
      }
    ],
    "zipRegex": "^(\\d{4})$"
  },
  {
    "region": "Oceania",
    "iso": "PN",
    "name": "Pitcairn",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(PCR9 1ZZ)$"
  },
  {
    "region": "Europe",
    "iso": "PL",
    "name": "Poland",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^[0-9]{2}[-]([0-9]){3}$"
  },
  {
    "region": "Europe",
    "iso": "PT",
    "name": "Portugal",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^\\d{4}((-|\\s)?\\d{3})?$"
  },
  {
    "region": "Americas",
    "iso": "PR",
    "name": "Puerto Rico",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^\\d{5}((-|\\s)?\\d{4})?$"
  },
  {
    "region": "Asia",
    "iso": "QA",
    "name": "Qatar",
    "hasPostalCodes": false,
    "states": [],
    "zipRegex": ""
  },
  {
    "region": "Africa",
    "iso": "RE",
    "name": "Réunion",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "[9]{1}[7|8][4|7|8]\\d{2}"
  },
  {
    "region": "Europe",
    "iso": "RO",
    "name": "Romania",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{6})$"
  },
  {
    "region": "Europe",
    "iso": "RU",
    "name": "Russian Federation",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{6})$"
  },
  {
    "region": "Africa",
    "iso": "RW",
    "name": "Rwanda",
    "hasPostalCodes": false,
    "states": [],
    "zipRegex": ""
  },
  {
    "region": "Americas",
    "iso": "BL",
    "name": "Saint Barthélemy",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{5})$"
  },
  {
    "region": "Africa",
    "iso": "SH",
    "name": "Saint Helena, Ascension and Tristan da Cunha",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^[A-Z]{4} (1ZZ)$"
  },
  {
    "region": "Americas",
    "iso": "KN",
    "name": "Saint Kitts and Nevis",
    "hasPostalCodes": false,
    "states": [],
    "zipRegex": ""
  },
  {
    "region": "Americas",
    "iso": "LC",
    "name": "Saint Lucia",
    "hasPostalCodes": false,
    "states": [],
    "zipRegex": ""
  },
  {
    "region": "Americas",
    "iso": "MF",
    "name": "Saint Martin (French part)",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{5})$"
  },
  {
    "region": "Americas",
    "iso": "PM",
    "name": "Saint Pierre and Miquelon",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{5})$"
  },
  {
    "region": "Americas",
    "iso": "VC",
    "name": "Saint Vincent and the Grenadines",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "(VC)(\\d{4})"
  },
  {
    "region": "Oceania",
    "iso": "WS",
    "name": "Samoa",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": ""
  },
  {
    "region": "Europe",
    "iso": "SM",
    "name": "San Marino",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(4789\\d)$"
  },
  {
    "region": "Africa",
    "iso": "ST",
    "name": "Sao Tome and Principe",
    "hasPostalCodes": false,
    "states": [],
    "zipRegex": ""
  },
  {
    "region": "Asia",
    "iso": "SA",
    "name": "Saudi Arabia",
    "hasPostalCodes": false,
    "states": [],
    "zipRegex": "^(\\d{5})$"
  },
  {
    "region": "Africa",
    "iso": "SN",
    "name": "Senegal",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{5})$"
  },
  {
    "region": "Europe",
    "iso": "RS",
    "name": "Serbia",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{5})$"
  },
  {
    "region": "Africa",
    "iso": "SC",
    "name": "Seychelles",
    "hasPostalCodes": false,
    "states": [],
    "zipRegex": ""
  },
  {
    "region": "Africa",
    "iso": "SL",
    "name": "Sierra Leone",
    "hasPostalCodes": false,
    "states": [],
    "zipRegex": ""
  },
  {
    "region": "Asia",
    "iso": "SG",
    "name": "Singapore",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{6})$"
  },
  {
    "region": "Americas",
    "iso": "SX",
    "name": "Sint Maarten (Dutch part)",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(0000 AA)$"
  },
  {
    "region": "Europe",
    "iso": "SK",
    "name": "Slovakia",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{3} \\d{2})$"
  },
  {
    "region": "Europe",
    "iso": "SI",
    "name": "Slovenia",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{4})$"
  },
  {
    "region": "Oceania",
    "iso": "SB",
    "name": "Solomon Islands",
    "hasPostalCodes": false,
    "states": [],
    "zipRegex": ""
  },
  {
    "region": "Africa",
    "iso": "SO",
    "name": "Somalia",
    "hasPostalCodes": false,
    "states": [],
    "zipRegex": ""
  },
  {
    "region": "Africa",
    "iso": "ZA",
    "name": "South Africa",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{4})$"
  },
  {
    "region": "Americas",
    "iso": "GS",
    "name": "South Georgia and the South Sandwich Islands",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(SIQQ 1ZZ)$"
  },
  {
    "region": "Africa",
    "iso": "SS",
    "name": "South Sudan",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{5})$"
  },
  {
    "region": "Europe",
    "iso": "ES",
    "name": "Spain",
    "hasPostalCodes": true,
    "states": [
      {
        "iso": "AB",
        "name": "Albacete"
      },
      {
        "iso": "A",
        "name": "Alicante"
      },
      {
        "iso": "AL",
        "name": "Almeria"
      },
      {
        "iso": "BA",
        "name": "Badajoz"
      },
      {
        "iso": "B",
        "name": "Barcelona"
      },
      {
        "iso": "BU",
        "name": "Burgos"
      },
      {
        "iso": "CS",
        "name": "Castellon"
      },
      {
        "iso": "CR",
        "name": "Ciudad Real"
      },
      {
        "iso": "CU",
        "name": "Cuenca"
      },
      {
        "iso": "CC",
        "name": "Caceres"
      },
      {
        "iso": "CA",
        "name": "Cadiz"
      },
      {
        "iso": "CO",
        "name": "Cordoba"
      },
      {
        "iso": "GI",
        "name": "Gerona"
      },
      {
        "iso": "GR",
        "name": "Granada"
      },
      {
        "iso": "GU",
        "name": "Guadalajara"
      },
      {
        "iso": "SS",
        "name": "Guipuzcoa"
      },
      {
        "iso": "H",
        "name": "Huelva"
      },
      {
        "iso": "HU",
        "name": "Huesca"
      },
      {
        "iso": "J",
        "name": "Jaen"
      },
      {
        "iso": "C",
        "name": "La Coruna"
      },
      {
        "iso": "LO",
        "name": "La Rioja"
      },
      {
        "iso": "GC",
        "name": "Las Palmas"
      },
      {
        "iso": "LE",
        "name": "Leon"
      },
      {
        "iso": "LU",
        "name": "Lugo"
      },
      {
        "iso": "L",
        "name": "Lerida"
      },
      {
        "iso": "M",
        "name": "Madrid"
      },
      {
        "iso": "MU",
        "name": "Murcia"
      },
      {
        "iso": "MA",
        "name": "Malaga"
      },
      {
        "iso": "OU",
        "name": "Orense"
      },
      {
        "iso": "P",
        "name": "Palencia"
      },
      {
        "iso": "PO",
        "name": "Pontevedra"
      },
      {
        "iso": "SA",
        "name": "Salamanca"
      },
      {
        "iso": "SG",
        "name": "Segovia"
      },
      {
        "iso": "SE",
        "name": "Sevilla"
      },
      {
        "iso": "SO",
        "name": "Soria"
      },
      {
        "iso": "T",
        "name": "Tarragona"
      },
      {
        "iso": "TF",
        "name": "Tenerife"
      },
      {
        "iso": "TE",
        "name": "Teruel"
      },
      {
        "iso": "TO",
        "name": "Toledo"
      },
      {
        "iso": "V",
        "name": "Valencia"
      },
      {
        "iso": "VA",
        "name": "Valladolid"
      },
      {
        "iso": "BI",
        "name": "Vizcaya"
      },
      {
        "iso": "ZA",
        "name": "Zamora"
      },
      {
        "iso": "Z",
        "name": "Zaragoza"
      },
      {
        "iso": "VI",
        "name": "Alava"
      },
      {
        "iso": "AV",
        "name": "Avila"
      }
    ],
    "zipRegex": "^(\\d{5})$"
  },
  {
    "region": "Asia",
    "iso": "LK",
    "name": "Sri Lanka",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{5})$"
  },
  {
    "region": "Africa",
    "iso": "SD",
    "name": "Sudan",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{5})$"
  },
  {
    "region": "Americas",
    "iso": "SR",
    "name": "Suriname",
    "hasPostalCodes": false,
    "states": [],
    "zipRegex": ""
  },
  {
    "region": "Europe",
    "iso": "SJ",
    "name": "Svalbard and Jan Mayen",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{4})$"
  },
  {
    "region": "Africa",
    "iso": "SZ",
    "name": "Swaziland",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^([A-Z]\\d{3})$"
  },
  {
    "region": "Europe",
    "iso": "SE",
    "name": "Sweden",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{3} \\d{2})$"
  },
  {
    "region": "Europe",
    "iso": "CH",
    "name": "Switzerland",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{4})$"
  },
  {
    "region": "Asia",
    "iso": "SY",
    "name": "Syrian Arab Republic",
    "hasPostalCodes": false,
    "states": [],
    "zipRegex": ""
  },
  {
    "region": "Asia",
    "iso": "TW",
    "name": "Taiwan, Province of China",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{3} \\d{2})|(\\d{3})$"
  },
  {
    "region": "Asia",
    "iso": "TJ",
    "name": "Tajikistan",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{3})$"
  },
  {
    "region": "Africa",
    "iso": "TZ",
    "name": "Tanzania, United Republic of",
    "hasPostalCodes": false,
    "states": [],
    "zipRegex": ""
  },
  {
    "region": "Asia",
    "iso": "TH",
    "name": "Thailand",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{5})$"
  },
  {
    "region": "Asia",
    "iso": "TL",
    "name": "Timor-Leste",
    "hasPostalCodes": false,
    "states": [],
    "zipRegex": ""
  },
  {
    "region": "Africa",
    "iso": "TG",
    "name": "Togo",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": ""
  },
  {
    "region": "Oceania",
    "iso": "TK",
    "name": "Tokelau",
    "hasPostalCodes": false,
    "states": [],
    "zipRegex": ""
  },
  {
    "region": "Oceania",
    "iso": "TO",
    "name": "Tonga",
    "hasPostalCodes": false,
    "states": [],
    "zipRegex": ""
  },
  {
    "region": "Americas",
    "iso": "TT",
    "name": "Trinidad and Tobago",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": ""
  },
  {
    "region": "Africa",
    "iso": "TN",
    "name": "Tunisia",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{4})$"
  },
  {
    "region": "Asia",
    "iso": "TR",
    "name": "Turkey",
    "hasPostalCodes": true,
    "states": [
      {
        "iso": "Adana",
        "name": "Adana"
      },
      {
        "iso": "Adıyaman",
        "name": "Adiyaman"
      },
      {
        "iso": "Afyonkarahisar",
        "name": "Afyonkarahisar"
      },
      {
        "iso": "Aksaray",
        "name": "Aksaray"
      },
      {
        "iso": "Amasya",
        "name": "Amasya"
      },
      {
        "iso": "Ankara",
        "name": "Ankara"
      },
      {
        "iso": "Antalya",
        "name": "Antalya"
      },
      {
        "iso": "Ardahan",
        "name": "Ardahan"
      },
      {
        "iso": "Artvin",
        "name": "Artvin"
      },
      {
        "iso": "Aydın",
        "name": "Aydin"
      },
      {
        "iso": "Ağrı",
        "name": "Agri"
      },
      {
        "iso": "Balıkesir",
        "name": "Balikesir"
      },
      {
        "iso": "Bartın",
        "name": "Bartin"
      },
      {
        "iso": "Batman",
        "name": "Batman"
      },
      {
        "iso": "Bayburt",
        "name": "Bayburt"
      },
      {
        "iso": "Bilecik",
        "name": "Bilecik"
      },
      {
        "iso": "Bingöl",
        "name": "Bingol"
      },
      {
        "iso": "Bitlis",
        "name": "Bitlis"
      },
      {
        "iso": "Bolu",
        "name": "Bolu"
      },
      {
        "iso": "Burdur",
        "name": "Burdur"
      },
      {
        "iso": "Bursa",
        "name": "Bursa"
      },
      {
        "iso": "Denizli",
        "name": "Denizli"
      },
      {
        "iso": "Diyarbakır",
        "name": "Diyarbakir"
      },
      {
        "iso": "Düzce",
        "name": "Duzce"
      },
      {
        "iso": "Edirne",
        "name": "Edirne"
      },
      {
        "iso": "Elazığ",
        "name": "Elazig"
      },
      {
        "iso": "Erzincan",
        "name": "Erzincan"
      },
      {
        "iso": "Erzurum",
        "name": "Erzurum"
      },
      {
        "iso": "Eskişehir",
        "name": "Eskisehir"
      },
      {
        "iso": "Gaziantep",
        "name": "Gaziantep"
      },
      {
        "iso": "Giresun",
        "name": "Giresun"
      },
      {
        "iso": "Gümüşhane",
        "name": "Gumushane"
      },
      {
        "iso": "Hakkâri",
        "name": "Hakkari"
      },
      {
        "iso": "Hatay",
        "name": "Hatay"
      },
      {
        "iso": "Isparta",
        "name": "Isparta"
      },
      {
        "iso": "Istanbul",
        "name": "Istanbul"
      },
      {
        "iso": "Iğdır",
        "name": "Igdir"
      },
      {
        "iso": "Kahramanmaraş",
        "name": "Kahramanmaras"
      },
      {
        "iso": "Karabük",
        "name": "Karabuk"
      },
      {
        "iso": "Karaman",
        "name": "Karaman"
      },
      {
        "iso": "Kars",
        "name": "Kars"
      },
      {
        "iso": "Kastamonu",
        "name": "Kastamonu"
      },
      {
        "iso": "Kayseri",
        "name": "Kayseri"
      },
      {
        "iso": "Kilis",
        "name": "Kilis"
      },
      {
        "iso": "Kocaeli",
        "name": "Kocaeli"
      },
      {
        "iso": "Konya",
        "name": "Konya"
      },
      {
        "iso": "Kütahya",
        "name": "Kutahya"
      },
      {
        "iso": "Kırklareli",
        "name": "Kirklareli"
      },
      {
        "iso": "Kırıkkale",
        "name": "Kirikkale"
      },
      {
        "iso": "Kırşehir",
        "name": "Kirsehir"
      },
      {
        "iso": "Malatya",
        "name": "Malatya"
      },
      {
        "iso": "Manisa",
        "name": "Manisa"
      },
      {
        "iso": "Mardin",
        "name": "Mardin"
      },
      {
        "iso": "Mersin",
        "name": "Mersin"
      },
      {
        "iso": "Muğla",
        "name": "Mugla"
      },
      {
        "iso": "Muş",
        "name": "Mus"
      },
      {
        "iso": "Nevşehir",
        "name": "Nevsehir"
      },
      {
        "iso": "Niğde",
        "name": "Nigde"
      },
      {
        "iso": "Ordu",
        "name": "Ordu"
      },
      {
        "iso": "Osmaniye",
        "name": "Osmaniye"
      },
      {
        "iso": "Rize",
        "name": "Rize"
      },
      {
        "iso": "Sakarya",
        "name": "Sakarya"
      },
      {
        "iso": "Samsun",
        "name": "Samsun"
      },
      {
        "iso": "Siirt",
        "name": "Siirt"
      },
      {
        "iso": "Sinop",
        "name": "Sinop"
      },
      {
        "iso": "Sivas",
        "name": "Sivas"
      },
      {
        "iso": "Tekirdağ",
        "name": "Tekirdag"
      },
      {
        "iso": "Tokat",
        "name": "Tokat"
      },
      {
        "iso": "Trabzon",
        "name": "Trabzon"
      },
      {
        "iso": "Tunceli",
        "name": "Tunceli"
      },
      {
        "iso": "Uşak",
        "name": "Usak"
      },
      {
        "iso": "Van",
        "name": "Van"
      },
      {
        "iso": "Yalova",
        "name": "Yalova"
      },
      {
        "iso": "Yozgat",
        "name": "Yozgat"
      },
      {
        "iso": "Zonguldak",
        "name": "Zonguldak"
      },
      {
        "iso": "Çanakkale",
        "name": "Canakkale"
      },
      {
        "iso": "Çankırı",
        "name": "Cankiri"
      },
      {
        "iso": "Çorum",
        "name": "Corum"
      },
      {
        "iso": "İzmir",
        "name": "Izmir"
      },
      {
        "iso": "Şanlıurfa",
        "name": "Sanliurfa"
      },
      {
        "iso": "Şırnak",
        "name": "Sirnak"
      }
    ],
    "zipRegex": "^(\\d{5})$"
  },
  {
    "region": "Asia",
    "iso": "TM",
    "name": "Turkmenistan",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{6})$"
  },
  {
    "region": "Americas",
    "iso": "TC",
    "name": "Turks and Caicos Islands",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(TKCA 1ZZ)$"
  },
  {
    "region": "Oceania",
    "iso": "TV",
    "name": "Tuvalu",
    "hasPostalCodes": false,
    "states": [],
    "zipRegex": ""
  },
  {
    "region": "Africa",
    "iso": "UG",
    "name": "Uganda",
    "hasPostalCodes": false,
    "states": [],
    "zipRegex": ""
  },
  {
    "region": "Europe",
    "iso": "UA",
    "name": "Ukraine",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{5})$"
  },
  {
    "region": "Asia",
    "iso": "AE",
    "name": "United Arab Emirates",
    "hasPostalCodes": false,
    "states": [],
    "zipRegex": ""
  },
  {
    "region": "Europe",
    "iso": "GB",
    "name": "United Kingdom",
    "hasPostalCodes": true,
    "states": [
      {
        "iso": "Aberdeen City",
        "name": "Aberdeen City"
      },
      {
        "iso": "Aberdeenshire",
        "name": "Aberdeenshire"
      },
      {
        "iso": "Angus",
        "name": "Angus"
      },
      {
        "iso": "Antrim",
        "name": "Antrim"
      },
      {
        "iso": "Argyll and Bute",
        "name": "Argyll and Bute"
      },
      {
        "iso": "Armagh",
        "name": "Armagh"
      },
      {
        "iso": "Avon",
        "name": "Avon"
      },
      {
        "iso": "Bedfordshire",
        "name": "Bedfordshire"
      },
      {
        "iso": "Berkshire",
        "name": "Berkshire"
      },
      {
        "iso": "Blaenau Gwent",
        "name": "Blaenau Gwent"
      },
      {
        "iso": "Borders",
        "name": "Borders"
      },
      {
        "iso": "Bridgend",
        "name": "Bridgend"
      },
      {
        "iso": "Bristol",
        "name": "Bristol"
      },
      {
        "iso": "Buckinghamshire",
        "name": "Buckinghamshire"
      },
      {
        "iso": "Caerphilly",
        "name": "Caerphilly"
      },
      {
        "iso": "Cambridgeshire",
        "name": "Cambridgeshire"
      },
      {
        "iso": "Cardiff",
        "name": "Cardiff"
      },
      {
        "iso": "Carmarthenshire",
        "name": "Carmarthenshire"
      },
      {
        "iso": "Ceredigion",
        "name": "Ceredigion"
      },
      {
        "iso": "Channel Islands",
        "name": "Channel Islands"
      },
      {
        "iso": "Cheshire",
        "name": "Cheshire"
      },
      {
        "iso": "Clackmannan",
        "name": "Clackmannan"
      },
      {
        "iso": "Cleveland",
        "name": "Cleveland"
      },
      {
        "iso": "Conwy",
        "name": "Conwy"
      },
      {
        "iso": "Cornwall",
        "name": "Cornwall"
      },
      {
        "iso": "Cumbria",
        "name": "Cumbria"
      },
      {
        "iso": "Denbighshire",
        "name": "Denbighshire"
      },
      {
        "iso": "Derbyshire",
        "name": "Derbyshire"
      },
      {
        "iso": "Devon",
        "name": "Devon"
      },
      {
        "iso": "Dorset",
        "name": "Dorset"
      },
      {
        "iso": "Down",
        "name": "Down"
      },
      {
        "iso": "Dumfries and Galloway",
        "name": "Dumfries and Galloway"
      },
      {
        "iso": "Durham",
        "name": "Durham"
      },
      {
        "iso": "East Ayrshire",
        "name": "East Ayrshire"
      },
      {
        "iso": "East Dunbartonshire",
        "name": "East Dunbartonshire"
      },
      {
        "iso": "East Lothian",
        "name": "East Lothian"
      },
      {
        "iso": "East Renfrewshire",
        "name": "East Renfrewshire"
      },
      {
        "iso": "East Riding of Yorkshire",
        "name": "East Riding of Yorkshire"
      },
      {
        "iso": "East Sussex",
        "name": "East Sussex"
      },
      {
        "iso": "Edinburgh City",
        "name": "Edinburgh City"
      },
      {
        "iso": "Essex",
        "name": "Essex"
      },
      {
        "iso": "Falkirk",
        "name": "Falkirk"
      },
      {
        "iso": "Fermanagh",
        "name": "Fermanagh"
      },
      {
        "iso": "Fife",
        "name": "Fife"
      },
      {
        "iso": "Flintshire",
        "name": "Flintshire"
      },
      {
        "iso": "Glasgow",
        "name": "Glasgow"
      },
      {
        "iso": "Gloucestershire",
        "name": "Gloucestershire"
      },
      {
        "iso": "Greater Manchester",
        "name": "Greater Manchester"
      },
      {
        "iso": "Gwynedd",
        "name": "Gwynedd"
      },
      {
        "iso": "Hampshire",
        "name": "Hampshire"
      },
      {
        "iso": "Herefordshire",
        "name": "Herefordshire"
      },
      {
        "iso": "Hertfordshire",
        "name": "Hertfordshire"
      },
      {
        "iso": "Highland",
        "name": "Highland"
      },
      {
        "iso": "Humberside",
        "name": "Humberside"
      },
      {
        "iso": "Inverclyde",
        "name": "Inverclyde"
      },
      {
        "iso": "Isle of Anglesey",
        "name": "Isle of Anglesey"
      },
      {
        "iso": "Isle of Man",
        "name": "Isle of Man"
      },
      {
        "iso": "Isle of Wight",
        "name": "Isle of Wight"
      },
      {
        "iso": "Isles of Scilly",
        "name": "Isles of Scilly"
      },
      {
        "iso": "Kent",
        "name": "Kent"
      },
      {
        "iso": "Lancashire",
        "name": "Lancashire"
      },
      {
        "iso": "Leicestershire",
        "name": "Leicestershire"
      },
      {
        "iso": "Lincolnshire",
        "name": "Lincolnshire"
      },
      {
        "iso": "London",
        "name": "London"
      },
      {
        "iso": "Londonderry",
        "name": "Londonderry"
      },
      {
        "iso": "Merseyside",
        "name": "Merseyside"
      },
      {
        "iso": "Merthyr Tydfil",
        "name": "Merthyr Tydfil"
      },
      {
        "iso": "Middlesex",
        "name": "Middlesex"
      },
      {
        "iso": "Midlothian",
        "name": "Midlothian"
      },
      {
        "iso": "Monmouthshire",
        "name": "Monmouthshire"
      },
      {
        "iso": "Moray",
        "name": "Moray"
      },
      {
        "iso": "Neath Port Talbot",
        "name": "Neath Port Talbot"
      },
      {
        "iso": "Newport",
        "name": "Newport"
      },
      {
        "iso": "Norfolk",
        "name": "Norfolk"
      },
      {
        "iso": "North Ayrshire",
        "name": "North Ayrshire"
      },
      {
        "iso": "North Lanarkshire",
        "name": "North Lanarkshire"
      },
      {
        "iso": "North Yorkshire",
        "name": "North Yorkshire"
      },
      {
        "iso": "Northamptonshire",
        "name": "Northamptonshire"
      },
      {
        "iso": "Northumberland",
        "name": "Northumberland"
      },
      {
        "iso": "Nottinghamshire",
        "name": "Nottinghamshire"
      },
      {
        "iso": "Orkney",
        "name": "Orkney"
      },
      {
        "iso": "Oxfordshire",
        "name": "Oxfordshire"
      },
      {
        "iso": "Pembrokeshire",
        "name": "Pembrokeshire"
      },
      {
        "iso": "Perthshire and Kinross",
        "name": "Perthshire and Kinross"
      },
      {
        "iso": "Powys",
        "name": "Powys"
      },
      {
        "iso": "Renfrewshire",
        "name": "Renfrewshire"
      },
      {
        "iso": "Rhondda Cynon Taff",
        "name": "Rhondda Cynon Taff"
      },
      {
        "iso": "Roxburghshire",
        "name": "Roxburghshire"
      },
      {
        "iso": "Rutland",
        "name": "Rutland"
      },
      {
        "iso": "Shetland",
        "name": "Shetland"
      },
      {
        "iso": "Shropshire",
        "name": "Shropshire"
      },
      {
        "iso": "Somerset",
        "name": "Somerset"
      },
      {
        "iso": "South Ayrshire",
        "name": "South Ayrshire"
      },
      {
        "iso": "South Lanarkshire",
        "name": "South Lanarkshire"
      },
      {
        "iso": "South Yorkshire",
        "name": "South Yorkshire"
      },
      {
        "iso": "Staffordshire",
        "name": "Staffordshire"
      },
      {
        "iso": "Stirling",
        "name": "Stirling"
      },
      {
        "iso": "Suffolk",
        "name": "Suffolk"
      },
      {
        "iso": "Surrey",
        "name": "Surrey"
      },
      {
        "iso": "Swansea",
        "name": "Swansea"
      },
      {
        "iso": "The Vale of Glamorgan",
        "name": "The Vale of Glamorgan"
      },
      {
        "iso": "Torfaen",
        "name": "Torfaen"
      },
      {
        "iso": "Tyne and Wear",
        "name": "Tyne and Wear"
      },
      {
        "iso": "Tyrone",
        "name": "Tyrone"
      },
      {
        "iso": "Warwickshire",
        "name": "Warwickshire"
      },
      {
        "iso": "West Dunbartonshire",
        "name": "West Dunbartonshire"
      },
      {
        "iso": "West Lothian",
        "name": "West Lothian"
      },
      {
        "iso": "West Midlands",
        "name": "West Midlands"
      },
      {
        "iso": "West Sussex",
        "name": "West Sussex"
      },
      {
        "iso": "West Yorkshire",
        "name": "West Yorkshire"
      },
      {
        "iso": "Western Isles",
        "name": "Western Isles"
      },
      {
        "iso": "Wiltshire",
        "name": "Wiltshire"
      },
      {
        "iso": "Worcestershire",
        "name": "Worcestershire"
      },
      {
        "iso": "Wrexham",
        "name": "Wrexham"
      }
    ],
    "zipRegex": "^(((([A-PR-UWYZ][0-9][0-9A-HJKS-UW]?)|([A-PR-UWYZ][A-HK-Y][0-9][0-9ABEHMNPRV-Y]?))\\s{0,2}[0-9]([ABD-HJLNP-UW-Z]{2}))|(GIR\\s{0,2}0AA))$"
  },
  {
    "region": "Americas",
    "iso": "US",
    "name": "United States",
    "hasPostalCodes": true,
    "states": [
      {
        "iso": "AL",
        "name": "Alabama"
      },
      {
        "iso": "AK",
        "name": "Alaska"
      },
      {
        "iso": "AZ",
        "name": "Arizona"
      },
      {
        "iso": "AR",
        "name": "Arkansas"
      },
      {
        "iso": "CA",
        "name": "California"
      },
      {
        "iso": "CO",
        "name": "Colorado"
      },
      {
        "iso": "CT",
        "name": "Connecticut"
      },
      {
        "iso": "DE",
        "name": "Delaware"
      },
      {
        "iso": "DC",
        "name": "District Of Columbia"
      },
      {
        "iso": "FL",
        "name": "Florida"
      },
      {
        "iso": "GA",
        "name": "Georgia"
      },
      {
        "iso": "HI",
        "name": "Hawaii"
      },
      {
        "iso": "ID",
        "name": "Idaho"
      },
      {
        "iso": "IL",
        "name": "Illinois"
      },
      {
        "iso": "IN",
        "name": "Indiana"
      },
      {
        "iso": "IA",
        "name": "Iowa"
      },
      {
        "iso": "KS",
        "name": "Kansas"
      },
      {
        "iso": "KY",
        "name": "Kentucky"
      },
      {
        "iso": "LA",
        "name": "Louisiana"
      },
      {
        "iso": "ME",
        "name": "Maine"
      },
      {
        "iso": "MD",
        "name": "Maryland"
      },
      {
        "iso": "MA",
        "name": "Massachusetts"
      },
      {
        "iso": "MI",
        "name": "Michigan"
      },
      {
        "iso": "MN",
        "name": "Minnesota"
      },
      {
        "iso": "MS",
        "name": "Mississippi"
      },
      {
        "iso": "MO",
        "name": "Missouri"
      },
      {
        "iso": "MT",
        "name": "Montana"
      },
      {
        "iso": "NE",
        "name": "Nebraska"
      },
      {
        "iso": "NV",
        "name": "Nevada"
      },
      {
        "iso": "NH",
        "name": "New Hampshire"
      },
      {
        "iso": "NJ",
        "name": "New Jersey"
      },
      {
        "iso": "NM",
        "name": "New Mexico"
      },
      {
        "iso": "NY",
        "name": "New York"
      },
      {
        "iso": "NC",
        "name": "North Carolina"
      },
      {
        "iso": "ND",
        "name": "North Dakota"
      },
      {
        "iso": "OH",
        "name": "Ohio"
      },
      {
        "iso": "OK",
        "name": "Oklahoma"
      },
      {
        "iso": "OR",
        "name": "Oregon"
      },
      {
        "iso": "PA",
        "name": "Pennsylvania"
      },
      {
        "iso": "RI",
        "name": "Rhode Island"
      },
      {
        "iso": "SC",
        "name": "South Carolina"
      },
      {
        "iso": "SD",
        "name": "South Dakota"
      },
      {
        "iso": "TN",
        "name": "Tennessee"
      },
      {
        "iso": "TX",
        "name": "Texas"
      },
      {
        "iso": "UT",
        "name": "Utah"
      },
      {
        "iso": "VT",
        "name": "Vermont"
      },
      {
        "iso": "VA",
        "name": "Virginia"
      },
      {
        "iso": "WA",
        "name": "Washington"
      },
      {
        "iso": "WV",
        "name": "West Virginia"
      },
      {
        "iso": "WI",
        "name": "Wisconsin"
      },
      {
        "iso": "WY",
        "name": "Wyoming"
      }
    ],
    "zipRegex": "^\\d{5}([\\-]\\d{4})?$"
  },
  {
    "region": "Americas",
    "iso": "UM",
    "name": "United States Minor Outlying Islands",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": ""
  },
  {
    "region": "Americas",
    "iso": "UY",
    "name": "Uruguay",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{5})$"
  },
  {
    "region": "Asia",
    "iso": "UZ",
    "name": "Uzbekistan",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{6})$"
  },
  {
    "region": "Oceania",
    "iso": "VU",
    "name": "Vanuatu",
    "hasPostalCodes": false,
    "states": [],
    "zipRegex": ""
  },
  {
    "region": "Americas",
    "iso": "VE",
    "name": "Venezuela, Bolivarian Republic of",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{4})$"
  },
  {
    "region": "Asia",
    "iso": "VN",
    "name": "Viet Nam",
    "hasPostalCodes": true,
    "states": [
      {
        "iso": "An Giang",
        "name": "An Giang"
      },
      {
        "iso": "Bà Rịa–Vũng Tàu",
        "name": "Ba Rịa–Vung Tau"
      },
      {
        "iso": "Bình Dương",
        "name": "Binh Dương"
      },
      {
        "iso": "Bình Phước",
        "name": "Binh Phước"
      },
      {
        "iso": "Bình Thuận",
        "name": "Binh Thuận"
      },
      {
        "iso": "Bình Định",
        "name": "Binh Dịnh"
      },
      {
        "iso": "Bạc Liêu",
        "name": "Bạc Lieu"
      },
      {
        "iso": "Bắc Giang",
        "name": "Bắc Giang"
      },
      {
        "iso": "Bắc Kạn",
        "name": "Bắc Kạn"
      },
      {
        "iso": "Bắc Ninh",
        "name": "Bắc Ninh"
      },
      {
        "iso": "Bến Tre",
        "name": "Bến Tre"
      },
      {
        "iso": "Cao Bằng",
        "name": "Cao Bằng"
      },
      {
        "iso": "Cà Mau",
        "name": "Ca Mau"
      },
      {
        "iso": "Cần Thơ",
        "name": "Cần Thơ"
      },
      {
        "iso": "Gia Lai",
        "name": "Gia Lai"
      },
      {
        "iso": "Hà Giang",
        "name": "Ha Giang"
      },
      {
        "iso": "Hà Nam",
        "name": "Ha Nam"
      },
      {
        "iso": "Hà Nội",
        "name": "Ha Nội"
      },
      {
        "iso": "Hà Tĩnh",
        "name": "Ha Tinh"
      },
      {
        "iso": "Hòa Bình",
        "name": "Hoa Binh"
      },
      {
        "iso": "Hưng Yên",
        "name": "Hưng Yen"
      },
      {
        "iso": "Hải Dương",
        "name": "Hải Dương"
      },
      {
        "iso": "Hải Phòng",
        "name": "Hải Phong"
      },
      {
        "iso": "Hậu Giang",
        "name": "Hậu Giang"
      },
      {
        "iso": "Khánh Hòa",
        "name": "Khanh Hoa"
      },
      {
        "iso": "Kiên Giang",
        "name": "Kien Giang"
      },
      {
        "iso": "Kon Tum",
        "name": "Kon Tum"
      },
      {
        "iso": "Lai Châu",
        "name": "Lai Chau"
      },
      {
        "iso": "Long An",
        "name": "Long An"
      },
      {
        "iso": "Lào Cai",
        "name": "Lao Cai"
      },
      {
        "iso": "Lâm Đồng",
        "name": "Lam Dồng"
      },
      {
        "iso": "Lạng Sơn",
        "name": "Lạng Sơn"
      },
      {
        "iso": "Nam Định",
        "name": "Nam Dịnh"
      },
      {
        "iso": "Nghệ An",
        "name": "Nghệ An"
      },
      {
        "iso": "Ninh Bình",
        "name": "Ninh Binh"
      },
      {
        "iso": "Ninh Thuận",
        "name": "Ninh Thuận"
      },
      {
        "iso": "Phú Thọ",
        "name": "Phu Thọ"
      },
      {
        "iso": "Phú Yên",
        "name": "Phu Yen"
      },
      {
        "iso": "Quảng Bình",
        "name": "Quảng Binh"
      },
      {
        "iso": "Quảng Nam",
        "name": "Quảng Nam"
      },
      {
        "iso": "Quảng Ngãi",
        "name": "Quảng Ngai"
      },
      {
        "iso": "Quảng Ninh",
        "name": "Quảng Ninh"
      },
      {
        "iso": "Quảng Trị",
        "name": "Quảng Trị"
      },
      {
        "iso": "Sóc Trăng",
        "name": "Soc Trang"
      },
      {
        "iso": "Sơn La",
        "name": "Sơn La"
      },
      {
        "iso": "Thanh Hóa",
        "name": "Thanh Hoa"
      },
      {
        "iso": "Thành phố Hồ Chí Minh",
        "name": "Thanh phố Hồ Chi Minh"
      },
      {
        "iso": "Thái Bình",
        "name": "Thai Binh"
      },
      {
        "iso": "Thái Nguyên",
        "name": "Thai Nguyen"
      },
      {
        "iso": "Thừa Thiên–Huế",
        "name": "Thừa Thien–Huế"
      },
      {
        "iso": "Tiền Giang",
        "name": "Tiền Giang"
      },
      {
        "iso": "Trà Vinh",
        "name": "Tra Vinh"
      },
      {
        "iso": "Tuyên Quang",
        "name": "Tuyen Quang"
      },
      {
        "iso": "Tây Ninh",
        "name": "Tay Ninh"
      },
      {
        "iso": "Vĩnh Long",
        "name": "Vinh Long"
      },
      {
        "iso": "Vĩnh Phúc",
        "name": "Vinh Phuc"
      },
      {
        "iso": "Yên Bái",
        "name": "Yen Bai"
      },
      {
        "iso": "Điện Biên",
        "name": "Diện Bien"
      },
      {
        "iso": "Đà Nẵng",
        "name": "Da Nẵng"
      },
      {
        "iso": "Đắk Lắk",
        "name": "Dắk Lắk"
      },
      {
        "iso": "Đắk Nông",
        "name": "Dắk Nong"
      },
      {
        "iso": "Đồng Nai",
        "name": "Dồng Nai"
      },
      {
        "iso": "Đồng Tháp",
        "name": "Dồng Thap"
      }
    ],
    "zipRegex": "^(\\d{6})$"
  },
  {
    "region": "Americas",
    "iso": "VG",
    "name": "Virgin Islands, British",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(VG11)[0-6][0]$"
  },
  {
    "region": "Americas",
    "iso": "VI",
    "name": "Virgin Islands, U.S.",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{5})$"
  },
  {
    "region": "Oceania",
    "iso": "WF",
    "name": "Wallis and Futuna",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": ""
  },
  {
    "region": "Africa",
    "iso": "EH",
    "name": "Western Sahara",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{5})$"
  },
  {
    "region": "Asia",
    "iso": "YE",
    "name": "Yemen",
    "hasPostalCodes": false,
    "states": [],
    "zipRegex": ""
  },
  {
    "region": "Africa",
    "iso": "ZM",
    "name": "Zambia",
    "hasPostalCodes": true,
    "states": [],
    "zipRegex": "^(\\d{5})$"
  },
  {
    "region": "Africa",
    "iso": "ZW",
    "name": "Zimbabwe",
    "hasPostalCodes": false,
    "states": [],
    "zipRegex": ""
  }
]

export const regions: Region[] = countries.reduce((result, country) => {
    if (result.indexOf(country.region) === -1) {
        result.push(country.region)
    }

    return result;
}, [])

export default countries;
