export type OrderStatus =
  | "Order Downloaded"
  | "Order Uploaded"
  | "Order Shipped"
  | "Due Date Negotiation"
  | "Completed"
  | "Order Rejected"
  | string;

export type Data = {
  order_id: number;
  created_by: string;
  assigned_lab: string;
  order_status: OrderStatus;
  created_date: string;
  delivery_date: string;
  patient_id: number;
  patient_name: string;
  date_of_birth: string;
  lab_information: string;
  restoration_type: string;
  action_allowed: {
    edit: boolean;
    view: boolean;
    delete: boolean;
  };
  order_journey: OrderStatus[];
};

export type Order = "asc" | "desc";

export type SortableFields = Omit<Data, "order_journey" | "action_allowed">;

export type HeadCell = {
  id: keyof Data;
  label: string;
  sortable?: boolean;
  searchable?: boolean;
};
