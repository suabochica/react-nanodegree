import { Filters } from './Filters';

type HeaderProps = {
    changeFilters: (minPrice: number) => void;
};

export function Header({ changeFilters }: HeaderProps) {
    return (
        <header>
            <h1> 🛒 Shopping Cart</h1>
            <Filters onChange={changeFilters} />
        </header>
    )
}
