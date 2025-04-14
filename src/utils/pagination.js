export const getSmartPagination = (totalPages, currentPage) => {
    const pages = []

    console.log("recieved total pages : ", totalPages + " and current page : ", currentPage)
  
    // Always show first 2 pages
    pages.push(1)
    if (totalPages >= 2) pages.push(2)
  
    // Show ... if needed before middle
    if (currentPage > 4) pages.push('...')
  
    // Middle 3 pages centered on current page
    const start = Math.max(3, currentPage - 1)
    const end = Math.min(totalPages - 2, currentPage + 1)
  
    for (let i = start; i <= end; i++) {
      if (!pages.includes(i)) pages.push(i)
    }
  
    // Show ... if needed after middle
    if (currentPage < totalPages - 3) pages.push('...')
  
    // Always show last 2 pages
    if (totalPages > 4) pages.push(totalPages - 1)
    if (totalPages > 3) pages.push(totalPages)


        console.log("we are sending to data to pagination", pages)
  
    // Remove duplicates and sort properly
    return pages
  }
  