
export type SelectDropDownFilterProps = {
    elementId: string,
    inputLabel: string,
    value: string,
    label: string,
    isDisabled: boolean,
    menuItems: string[],
    setValue: (a: string) => void
}

export type MultiSelectDropDownFilterProps = {
    elementId: string,
    inputLabel: string,
    selectedValues: string[],
    label: string,
    isDisabled: boolean,
    menuItems: string[],
    setSelectedValues: (a: string[]) => void
}

export type FilterBtnProp = {
    btnClassName: string,
    btnLabel: string,
    isDisabled: boolean,
    onBtnClick: () => void
}

export type ProductType = {
    brand: string,
    category: string,
    description: string,
    discountPercentage: number,
    id: number,
    title: string,
    price: number
}

export type ProductDashboardAllProduct = {
    setProductsOfSelectedCategory: (product: ProductType[]) => void,
    setCategories: (categories: string[]) => void,
    setPieChart: (flag: boolean) => void,
}

export type ProductChartOfSelectedCategory = {
    allProductsOfCategory: ProductType[],
    toRenderPieChart: boolean,
    categories: string[]
}

export type PieChartProps = {
    allCategories: string[]
}

export type PieChartInfoType = {
    name: string,
    y: number
}

export type CategoryMenuItem = {
    categoryMenuItem: string[],
    setCategoryMenuItem: (categories: string[]) => void
}