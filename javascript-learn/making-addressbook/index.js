console.log("Address Book");

const DATA_CONTACTS = [
  {
    name: "Arsyad Sukma Ramadhan",
    nick: "Arsyad",
    gender: "male",
    emails: ["blacklistdark1987@gmail.com", "181111072@mhs.stiki.ac.id"],
    phones: ["+6281284863756", "+6285785510045"],
    address: {
      country: "Indonesia",
      province: "Jawa Timur",
      city: "Malang"
    }
  },
  {
    name: "Azerino Yogananta Gatot Subroto",
    nick: "Gatot / Yoga",
    gender: "male",
    emails: ["azerino25@gmail.com"],
    phones: ["+62895360159807", "+6281332466763"],
    address: {
      country: "Indonesia",
      province: "Jawa Timur",
      city: "Malang"
    }
  },
  {
    name: "Christian Jehoshaphat Suryo",
    nick: "Christian",
    name: "Arsyad Sukma Ramadhan",
    nick: "Grandmaster",
    gender: "male",
    emails: ["christianjehoshaphat@gmail.com"],
    phones: ["+6285886197767"],
    address: {
      country: "Indonesia",
      province: "Banten",
      city: "Tangerang Selatan"
    }
  },
  {
    name: "Desi Mandasari ",
    nick: "Manda",
    gender: "Female",
    emails: ["desimandasari1993@gmail.com", "desymanda93@gmail.com"],
    phones: ["+6282331337447 "],
    address: {
      country: "Indonesia",
      province: "DKI Jakarta",
      city: "Jakarta"
    }
  },
  {
    name: "Dheta Catur Maharani",
    nick: "Dheta",
    gender: "Female",
    emails: ["theresiadhetacm@gmail.com"],
    phones: ["+6281211064340", "+6283876740854"],
    address: {
      country: "Indonesia",
      province: "Jawa Tengah",
      city: "Demak"
    }
  },
  {
    name: "Furqan Maudhudy",
    nick: "Furqan",
    gender: "male",
    emails: ["furqanmaudhudy@gmail.com", "fvrqan@outlook.com"],
    phones: ["+6285359699100"],
    address: {
      country: "Indonesia",
      province: "Aceh",
      city: "Banda Aceh"
    }
  },
  {
    name: "Ipul Saepulloh",
    nick: "Ipul",
    gender: "male",
    emails: ["ipulsaepulloh9@gmail.com"],
    phones: ["+62-858-8837-5440", "+62-859-7546-5858"],
    address: {
      country: "Indonesia",
      province: "Jawa Barat",
      city: "Karawang"
    }
  },
  {
    name: "Iwin Pradana Rahardjo",
    nick: "Iwin",
    gender: "male",
    emails: ["iwinrahardjo@yahoo.com", "winrahardjo6696@gmail.com"],
    phones: ["+6287874779277"],
    address: {
      country: "Indonesia",
      province: "Banten",
      city: "Tangerang"
    }
  },
  {
    name: "Masagus Hariadi Arief",
    nick: "Adi",
    gender: "male",
    emails: ["adi.arief77@gmail.com", "hariadiarief@student.ub.ac.id"],
    phones: ["+6281369997083", "+628984363393"],
    address: {
      country: "Indonesia",
      province: "Jawa Barat",
      city: "Bekasi"
    }
  },
  {
    name: "Panji Gumelar",
    nick: "Panji",
    gender: "male",
    emails: ["panjiggm@gmail.com"],
    phones: ["+62895320127117", "+6281210491747"],
    address: {
      country: "Indonesia",
      province: "Banten",
      city: "Tangerang"
    }
  },
  {
    name: "Rina Hafizhah Utami",
    nick: "Rina",
    gender: "Female",
    emails: ["rinahafizhah@gmail.com", "rinadreams105@gmail.com"],
    phones: ["+6285775126423", "+6281289656840"],
    address: {
      country: "Indonesia",
      province: "Jawa Barat",
      city: "Depok"
    }
  },
  {
    name: "Yusuf Habibi",
    nick: "Yusuf",
    gender: "male",
    emails: ["yusufhabibi1998@gmail.com", "ucupksp14@gmail.com"],
    phones: ["+62857-7496-6268", "+6281617699488"],
    address: {
      country: "Indonesia",
      province: "Jawa Barat",
      city: "Bogor"
    }
  }
];

const addressBook = {
  getData: data => {
    return data;
  },
  getNames: data => {
    return data.map(item => {
      return item.name;
    });
  },
  getFullContacts: data => {
    return data.map(item => {
      return `${item.name} Phone: (${item.phones[0]}) Email <${
        item.emails[0]
      }>`;
    });
  },
  getFullAddresses: data => {
    return data.map(item => {
      const { city, province, country } = item.address;
      return `${
        item.nick
      } lives in ${country}, in the city of ${city} located inside ${province} province`;
    });
  },
  displayConsole: data => {
    data.forEach(item => {
      console.log(item);
    });
  }
};

console.log("Show all Datas");
console.log(addressBook.getData(DATA_CONTACTS));

console.log("Show all Name only entry in the Datas");
console.log(addressBook.getNames(DATA_CONTACTS));

console.log("Get only the Contact Category from the Datas");
const fullContact = addressBook.getFullContacts(DATA_CONTACTS);
console.log(fullContact);

console.log("Get only the Address Category from the Datas");
const fullAddress = addressBook.getFullAddresses(DATA_CONTACTS);
console.log(fullAddress);
