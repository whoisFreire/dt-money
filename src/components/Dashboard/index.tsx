import { Container } from "../Dashboard/styles";
import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable/indes";

export function Dashboard() {
    return (
        <Container>
            <Summary />
            <TransactionsTable />
        </Container>
    )
}