import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { prismic } from '../services/prismic';

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
  const [activeCompany, setActiveCompany] = useState('');
  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    prismic
      .getByType('experience', {
        orderings: {
          field: 'document.first_publication_date',
          direction: 'desc',
        },
      })
      .then(({ results }) => {
        const formattedExperiences = results.map((result) => {
          const {
            id,
            data: { company, role, start_date, end_date, description },
          } = result;
          return {
            id,
            company,
            role,
            description,
            start_date: new Date(start_date).toLocaleString('pt-BR', {
              day: '2-digit',
              month: '2-digit',
              year: '2-digit',
            }),
            end_date: result.data.end_date
              ? new Date(end_date).toLocaleString('pt-BR', {
                  day: '2-digit',
                  month: '2-digit',
                  year: '2-digit',
                })
              : '',
          };
        });
        setExperiences(formattedExperiences);
        setActiveCompany(formattedExperiences[0].id);
      });
  }, []);

  const activeExperienceData = experiences.find(
    (xp) => xp.id === activeCompany
  );

  function setCompany(id: string) {
    setActiveCompany(id);
  }

  return (
    <experienceContext.Provider
      value={{
        experiences,
        activeCompany,
        activeExperienceData,
        setCompany,
      }}>
      {children}
    </experienceContext.Provider>
  );
}

export function useExperience() {
  return useContext(experienceContext);
}
