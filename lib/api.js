export async function get(query) {
    const response = await fetch(
        `https://nosservicespublics.getgrist.com/api/docs/hXBbY6ngk5ik/tables/${query}`,
    );
    const payload = await response.json();
    return payload.records;
}
