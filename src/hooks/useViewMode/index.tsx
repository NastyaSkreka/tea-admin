import { useState, useEffect } from 'react';
import { StyledListButton, Icon, StyledGridButton } from './styles';
import { CiBoxList, CiGrid41 } from "react-icons/ci";

type ViewMode = "list" | "grid";

const localStorageKey = 'viewMode';

export const useViewMode = (initialMode: ViewMode = 'list') => {
    const [viewMode, setViewMode] = useState<ViewMode>(() => {
        const savedMode = localStorage.getItem(localStorageKey);
        return savedMode ? (savedMode as ViewMode) : initialMode;
    });

    const toggleViewMode = () => {
        setViewMode(prevMode => {
            const newMode = prevMode === 'list' ? 'grid' : 'list';
            localStorage.setItem(localStorageKey, newMode);
            return newMode;
        });
    };

    const ListButton = ({ active }: { active: boolean }) => (
        <StyledListButton active={active} onClick={toggleViewMode}>
            <Icon as={CiBoxList} />
        </StyledListButton>
    );

    const GridButton = ({ active }: { active: boolean }) => (
        <StyledGridButton active={active} onClick={toggleViewMode}>
            <Icon as={CiGrid41} />
        </StyledGridButton>
    );

    return { viewMode, toggleViewMode, ListButton, GridButton };
};

  
