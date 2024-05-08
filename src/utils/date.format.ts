export function formatCreatedAt(createdAt: string): string {
    const dateObj = new Date(createdAt);
    const options: Intl.DateTimeFormatOptions = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: 'numeric',
    };
    
    const formattedDate = dateObj.toLocaleString('en-US', options);
    
    return formattedDate;
}


