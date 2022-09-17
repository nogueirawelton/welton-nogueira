import { createContext, useContext,useState, ReactNode, useEffect } from "react";
import { prismic } from "../services/prismic";


interface Experience {
  id: string;
  company: string;
  role: string;
  start_date: string;
  end_date?: string;
  description: string;
}

interface ExperienceProviderProps {
  children: ReactNode;
}

interface ExperienceContextData {
  experiences: Experience[];
  activeCompany: string;
  activeExperienceData: Experience | undefined;
  setCompany: (id: string) => void;
}
const experienceContext = createContext({} as ExperienceContextData);

export function ExperiencesProvider({ children }: ExperienceProviderProps) {
  const [activeCompany, setActiveCompany] = useState("");
  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    prismic.getByType("experience").then(({results}) => {
      const formattedExperiences = results.map(result => {
        return {
          id: result.id,
          company: result.data.company,
          role: result.data.role,
          start_date: new Date(result.data.start_date).toLocaleString("pt-BR", {
            day:"2-digit",
            month:"2-digit",
            year: "2-digit"
          }),
          end_date: result.data.end_date ? new Date(result.data.end_date).toLocaleString("pt-BR", {
            day:"2-digit",
            month:"2-digit",
            year: "2-digit"
          }) : "",
          description: result.data.description,
        };
      });
      setExperiences(formattedExperiences);
      setActiveCompany(formattedExperiences[0].id);
    });
  }, [])

  const activeExperienceData = experiences.find(xp => xp.id === activeCompany);


  function setCompany(id: string) {
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