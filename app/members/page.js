import ChatOverlay from "@/components/ChatOverlay";
import Profile from "@/components/Profile";
import { Container } from "react-bootstrap";

/**TODO: Add in the auth check */
export default function Members() {
    return (
        <Container fluid>
            <h1>Chat</h1>
            <p>This page showcases the user view of the chat. For admin view, please go to INSERT LINK HERE</p>
            <Profile />
            <ChatOverlay />
        </Container>

    )
}
