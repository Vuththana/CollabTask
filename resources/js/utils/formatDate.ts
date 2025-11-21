export const monthName = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
]

export const formatDate = (date?: string) => {
    // Undefined handler
    if (!date) return ""

    // - and / splitter
    const parts = date?.includes('-')
        ? date.split('-') : date?.split('/');
    
    const month = parseInt(parts[1], 10); // Converting string -> number
    const day = parts[2];

    return `${monthName[month - 1]} ${day}`;
}