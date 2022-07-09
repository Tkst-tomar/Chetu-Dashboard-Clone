export const INSERT_BREADCRUMBS = 'INSERT_BREADCRUMBS'
const InsertBreadcrumbs = (data)=>{
    return {
        type: INSERT_BREADCRUMBS,
        payload: data
    }
}

export default InsertBreadcrumbs
