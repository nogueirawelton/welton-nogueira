import { createContext, useContext,useState, ReactNode } from "react";


interface Experience {
  id: number;
  company: string;
  role: string;
  date: string;
  description: string;
}

interface ExperienceProviderProps {
  children: ReactNode;
}

interface ExperienceContextData {
  experiences: Experience[];
  activeCompany: number;
  activeExperienceData: Experience | undefined;
  setCompany: (id: number) => void;
}
const experienceContext = createContext({} as ExperienceContextData);

const experiences = [
  {
    id: 1,
    company: "Animo Consultoria",
    role: "Desenvolvedor FrontEnd",
    date: "2019",
    description: "lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit"
  },
  {
    id: 2,
    company: "Empresa Teste",
    role: "Desenvolvedor BackEnd",
    date: "2020",
    description: "lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit"
  },
  { 
    id: 3,
    company: "Empresa Testada",
    role: "Desenvolvedor FullStack",
    date: "2021",
    description: "lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit"
  },
]

export function ExperiencesProvider({ children }: ExperienceProviderProps) {
  const [activeCompany, setActiveCompany] = useState(1);

  const activeExperienceData = experiences.find(xp => xp.id === activeCompany);


  function setCompany(id: number) {
    setActiveCompany(id);
  }

  return (
    <experienceContext.Provider value={{
      experiences,
      activeCompany,
      activeExperienceData,
      setCompany
    }}>
      {children}
    </experienceContext.Provider>
  )
}

export function useExperience() {
  return useContext(experienceContext);
}