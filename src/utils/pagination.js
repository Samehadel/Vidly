
export function paginate(items, pageSize, pageNumber) {
    const startIndex = (pageNumber - 1) * pageSize;
    const lastIndex = startIndex + pageSize;

    return items.slice(startIndex, lastIndex);

}