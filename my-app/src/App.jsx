import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Favorite from "./pages/Favorite";
import Inbox from "./pages/Inbox";
import OrderLists from "./pages/OrderLists";
import ProductStock from "./pages/ProductStock";
import Pricing from "./pages/Pricing";
import Calendar from "./pages/Calendar";
import ToDo from "./pages/ToDo";
import Contact from "./pages/Contact";
import Invoice from "./pages/Invoice";
import UiElements from "./pages/UiElements";
import Team from "./pages/Team";
import Table from "./pages/Table";
import Settings from "./pages/Settings";
import Logout from "./pages/Logout";
import MainLayout from "./layout/MainLayout";
import InboxLayout from "./layout/InboxLayout.jsx";
import AddContact from "./pages/AddContact.jsx";
import AddMember from "./pages/AddMember.jsx";
import { FavoritesProvider } from "./context/FavoritesContext.jsx";
import { MonthProvider } from "./components/graphs/SelectedMonth";
import { InboxProvider } from "./context/inbox/InboxContent.jsx"
import { LablesProvider } from "./context/inbox/LablesContext.jsx"
import { ContactsProvider } from "./context/contact/ContactsContext.jsx";
import { TeamProvider } from "./context/team/teamContext.jsx";
import { Starred } from "./pages/Starred.jsx";
export default function App() {
  return (
    <TeamProvider>
    <ContactsProvider>
    <LablesProvider>
    <InboxProvider>
    <FavoritesProvider>
      <MonthProvider>
        <Routes>
        {/* Сначала layout */}
        <Route path="/" element={<MainLayout />}>
          
          {/* Вот тут index — это страница "/" */}
          <Route index element={<Navigate to="dashboard" replace />} />

          {/* Теперь внутренние страницы */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="favorite" element={<Favorite />} />
          <Route path="inbox" element={<Inbox />} />
          <Route path="inbox/starred" element={<Starred />} />
          <Route path="inbox/sent" element={<Inbox />} />
          <Route path="inbox/draft" element={<Inbox />} />
          <Route path="inbox/spam" element={<Inbox />} />
          <Route path="inbox/important" element={<Inbox />} />
          <Route path="inbox/bin" element={<Inbox />} />
          <Route path="orderLists" element={<OrderLists />} />
          <Route path="productStock" element={<ProductStock />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="toDo" element={<ToDo />} />
          <Route path="contact" element={<Contact />}/>
          <Route path="/contact/new" element={<AddContact />} />
          <Route path="/team/new" element={<AddMember />} />
          <Route path="invoice" element={<Invoice />} />
          <Route path="uiElements" element={<UiElements />} />
          <Route path="team" element={<Team />} />
          <Route path="table" element={<Table />} />
          <Route path="settings" element={<Settings />} />
          <Route path="logout" element={<Logout />} />
        </Route>
        {/* Неизвестный путь */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />

      </Routes>
    </MonthProvider>
    </FavoritesProvider>
    </InboxProvider>
    </LablesProvider>
    </ContactsProvider>
    </TeamProvider>
  );
}
