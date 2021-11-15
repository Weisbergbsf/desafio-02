import '../styles/global.scss'

interface Props {
    children: JSX.Element | JSX.Element[];
}

export function AppWrapper({ children }: Props) {
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            {children}
        </div>
    );
}