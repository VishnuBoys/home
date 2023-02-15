import React, { useMemo } from "react";
import MaterialReactTable from "material-react-table";

//nested data is ok, see accessorKeys in ColumnDef below
const data = [
  {
    name: {
      firstName: "Yuva",
      lastName: "Roopchansingh",
    },
    subject: "Integrated Science, Biology",
    position: "Head of Department",
    department: "Science",
  },
  {
    name: {
      firstName: "Reva",
      lastName: "Singh-Maraj",
    },
    subject: "Information Technology",
    position: "Head of Department",
    department: "Maths/I.T./Business",
  },
  {
    name: {
      firstName: "Lincoln",
      lastName: "Ganesh",
    },
    subject: "Art",
    position: " Head of Department",
    department: "Modern Studies",
  },
  {
    name: {
      firstName: "Neela",
      lastName: "Dipchand",
    },
    subject: "Spanish",
    position: "Head of Department",
    department: "English Language Arts/Modern Language",
  },
  {
    name: {
      firstName: "Shivan",
      lastName: "Maharaj",
    },
    subject: "Sociology",
    position: "Dean",
    department: "Modern Studies",
  },
  {
    name: {
      firstName: "Ambika",
      lastName: "Ojar-Maharaj",
    },
    subject: "English A",
    position: "Dean",
    department: "English Language Arts/Modern Language",
  },
  {
    name: {
      firstName: "Rajesh",
      lastName: "Persad",
    },
    subject: "History",
    position: "Dean",
    department: "Modern Studies",
  },
  {
    name: {
      firstName: "Tara",
      lastName: "Kelly-Mano",
    },
    subject: "English B",
    position: "Dean",
    department: "English Language Arts/Modern Language",
  },
  {
    name: {
      firstName: "Darrell",
      lastName: "Dulalchan",
    },
    subject: "Biology",
    position: "Teacher",
    department: "Science",
  },
  {
    name: {
      firstName: "Sushma",
      lastName: "Bhagwandeen",
    },
    subject: "Biology, Integrated Science",
    position: "Teacher",
    department: "Science",
  },
  {
    name: {
      firstName: "Naresh",
      lastName: "Koonoo",
    },
    subject: "Physical Education",
    position: "Teacher",
    department: "Science",
  },
  {
    name: {
      firstName: "Bhisham",
      lastName: "Maharaj",
    },
    subject: "Physical Education",
    position: "Teacher",
    department: "Science",
  },
  {
    name: {
      firstName: "Dana",
      lastName: "Ramkissoon",
    },
    subject: "Geography, Environmental Science",
    position: "Teacher",
    department: "Science",
  },
  {
    name: {
      firstName: "Ravi",
      lastName: "Deosaran",
    },
    subject: "Geography",
    position: "Teacher",
    department: "Science",
  },
  {
    name: {
      firstName: "Davatee",
      lastName: "Maharaj",
    },
    subject: "Physics",
    position: "Teacher",
    department: "Science",
  },
  {
    name: {
      firstName: "Kirthi",
      lastName: "Singh",
    },
    subject: "Chemistry",
    position: "Teacher",
    department: "Science",
  },
  {
    name: {
      firstName: "Samdaye",
      lastName: "Gopaulchan",
    },
    subject: "Principle of Accounts",
    position: "Teacher",
    department: "Maths/I.T./Business",
  },
  {
    name: {
      firstName: "Mahindranath",
      lastName: "Rambally",
    },
    subject: "Principle of Business, Management of Business",
    position: "Teacher",
    department: "Maths/I.T./Business",
  },
  {
    name: {
      firstName: "Anita",
      lastName: "Deonarine",
    },
    subject: "Principle of Accounts",
    position: "Teacher",
    department: "Maths/I.T./Business",
  },
  {
    name: {
      firstName: "Ganesham",
      lastName: "Ramsaroop",
    },
    subject: "Economics",
    position: "Teacher",
    department: "Maths/I.T./Business",
  },
  {
    name: {
      firstName: "Rishi",
      lastName: "Ramnarine",
    },
    subject: "Additional Mathematics, Pure Maths",
    position: "Teacher",
    department: "Maths/I.T./Business",
  },
  {
    name: {
      firstName: "Savitri",
      lastName: "Bahal",
    },
    subject: "Mathematics",
    position: "Teacher",
    department: "Maths/I.T./Business",
  },
  {
    name: {
      firstName: "Roshni",
      lastName: "Doolarchan",
    },
    subject: "Mathematics",
    position: "Teacher",
    department: "Maths/I.T./Business",
  },
  {
    name: {
      firstName: "Shalon",
      lastName: "Seecharan",
    },
    subject: "Mathematics",
    position: "Teacher",
    department: "Maths/I.T./Business",
  },
  {
    name: {
      firstName: "Krystal",
      lastName: "Seecharan",
    },
    subject: "Mathematics",
    position: "Teacher",
    department: "Maths/I.T./Business",
  },
  {
    name: {
      firstName: "Michelle",
      lastName: "Jattan-Sharma",
    },
    subject: "Information Technology",
    position: "Teacher",
    department: "Maths/I.T./Business",
  },
  {
    name: {
      firstName: "Kavita",
      lastName: "Francis",
    },
    subject: "Social Studies",
    position: "Teacher",
    department: "Modern Studies",
  },
  {
    name: {
      firstName: "Seema",
      lastName: "Palloo",
    },
    subject: "Social Studies, Sociology",
    position: "Teacher",
    department: "Modern Studies",
  },
  {
    name: {
      firstName: "Kajol",
      lastName: "Madho",
    },
    subject: "Visual Arts",
    position: "Teacher",
    department: "Modern Studies",
  },
  {
    name: {
      firstName: "Vedesh",
      lastName: "Nath",
    },
    subject: "Dance and Drama",
    position: "Teacher",
    department: "Modern Studies",
  },
  {
    name: {
      firstName: "Nalini",
      lastName: "Bachoo",
    },
    subject: "Spanish",
    position: "Teacher",
    department: "English Language Arts/Modern Language",
  },
  {
    name: {
      firstName: "Indira",
      lastName: "Nowbut",
    },
    subject: "Spanish",
    position: "Teacher",
    department: "English Language Arts/Modern Language",
  },
  {
    name: {
      firstName: "Arita",
      lastName: "Heetai",
    },
    subject: "English B",
    position: "Teacher",
    department: "English Language Arts/Modern Language",
  },
  {
    name: {
      firstName: "Aruna",
      lastName: "Singh",
    },
    subject: "English A",
    position: "Teacher",
    department: "English Language Arts/Modern Language",
  },
  {
    name: {
      firstName: "Priya",
      lastName: "Teemal",
    },
    subject: "English A",
    position: "Teacher",
    department: "English Language Arts/Modern Language",
  },
  {
    name: {
      firstName: "Kaveesh",
      lastName: "Maharaj",
    },
    subject: "English B",
    position: "Teacher",
    department: "English Language Arts/Modern Language",
  },
  {
    name: {
      firstName: "Fiona",
      lastName: "Chadee",
    },
    subject: "English A",
    position: "Teacher",
    department: "English Language Arts/Modern Language",
  },
];

const Example = () => {
  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: "department", //access nested data with dot notation
        header: "Department",
      },

      {
        accessorKey: "name.firstName", //access nested data with dot notation
        header: "First Name",
      },
      {
        accessorKey: "name.lastName",
        header: "Last Name",
      },
      {
        accessorKey: "position", //normal accessorKey
        header: "Position",
      },
      {
        accessorKey: "subject",
        header: "Subject",
      },
    ],
    []
  );

  return <MaterialReactTable manualSorting columns={columns} data={data} />;
};

export default Example;
