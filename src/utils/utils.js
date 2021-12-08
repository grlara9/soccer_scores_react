export const sortData = (data) =>{

const sortedLegues = [...data]

return sortedLegues.sort((a,b) => (a.value < b.value ? -1 : 1))

}