function formatDate(date) {
    const parsedDate = new Date(date);

    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    };

    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(parsedDate);

    return formattedDate;
}