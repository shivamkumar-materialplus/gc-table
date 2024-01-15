import { Box, Breadcrumbs, Divider, IconButton, Link, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';
import { DownloadIcon, NoteIcon, PrintIcon } from '../icons';
import { COLOR } from '../utils/constants';


type Props = {}

type IconLabelProps = {
  icon: React.JSX.Element;
  label: string;
  disabled?: boolean;
  onClick: () => any;
  classes?: string
}

const IconLabelButton = ({ icon, label, disabled, onClick, classes }: IconLabelProps) => {
  return (
    <IconButton
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 0,
        borderRadius: 0,
        backgroundColor: 'none',
        '&:hover': {
          backgroundColor: 'transparent',
        }
      }}
      disabled={disabled}
      onClick={onClick}
      className={classes}
    >
      {icon}
      <Typography color={COLOR.GC_GREEN_AA} sx={{ textDecoration: 'underline' }}>{label}</Typography>
    </IconButton>
  );
};

function InfoBox({ horizontal, title, value }: { horizontal?: boolean, title: string, value: string }) {
  return horizontal
    ? <Typography sx={{ fontWeight: 600, display: 'inline-block' }}>
      {title}: &nbsp;
      <Typography sx={{ display: 'inline-block' }}>
        {value}
      </Typography>
    </Typography>
    : <Stack gap={1}>
      <Typography variant='body1'>
        {title}
      </Typography>
      <Typography variant='body2' sx={{ fontWeight: 600 }}>
        {value}
      </Typography>
    </Stack>
}

function OrderDetails({ orderId }: { orderId: string | undefined }) {
  if (typeof orderId === undefined) {
    return null
  }

  const rows = [{
    restoration_type: "インレー",
    tooth_area: '11',
    color: "Color",
    material: "イニシャル LiSiブロック",
  },
  {
    restoration_type: "インレー",
    tooth_area: '10',
    color: "Color",
    material: "イニシャル LiSiブロック",
  },
  {
    restoration_type: "インレー",
    tooth_area: '12',
    color: "Color",
    material: "イニシャル LiSiブロック",
  },
  {
    restoration_type: "インレー",
    tooth_area: '9',
    color: "Color",
    material: "イニシャル LiSiブロック",
  },
  {
    restoration_type: "インレー",
    tooth_area: '13',
    color: "Color",
    material: "イニシャル LiSiブロック",
  }]

  return <Paper elevation={3} sx={{ boxShadow: '2px 6px 33px 0px rgba(0, 0, 0, 0.25)', p: '34px 39px 69px', mb: "48px" }} className='section-to-print'>
    <Stack gap={4}>
      {/* Top section with download and print button */}
      <Stack direction={"row"} alignItems={'center'} gap={3}>
        <Typography variant='body1' sx={{ fontSize: '32px', lineHeight: '150%' }}>Order ID: {orderId}</Typography>
        <Box sx={{ p: '8px 12px', backgroundColor: COLOR.LIGHT_GRAY, borderRadius: 1 }}>Order Uploaded</Box>
        <Stack direction={"row"} gap={4} ml={"auto"}>
          <IconLabelButton icon={<DownloadIcon color={COLOR.GC_GREEN_AA} />} label='Download Order' onClick={() => { }} classes={"noprint"} />
          <IconLabelButton icon={<PrintIcon color={COLOR.GC_GREEN_AA} />} label='Print Order' onClick={() => { window.print(); }} classes={"noprint"} />
        </Stack>
      </Stack>
      {/* Patient Details */}
      <Stack divider={<Divider flexItem sx={{ backgroundColor: COLOR.GC_GREEN_AA, borderBottomWidth: 2 }} />}>
        <Typography variant='h2' sx={{
          px: "20px", fontSize: '32px', fontWeight: 500, lineHeight: '150%'
        }}>
          Patient Details
        </Typography>
        <Box sx={{ px: '20px', pt: '30px' }}>
          <Stack direction={"row"} gap={"38px"}>
            <InfoBox title='Patient Last Name' value='Rhodes' />
            <InfoBox title='Patient First Name' value=' Kathryn' />
            <InfoBox title='Sex' value='Female' />
            <InfoBox title='Date of Birth' value='1991/05/20' />
          </Stack>
        </Box>
      </Stack>
      {/* Clinic and Lab Info */}
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Stack divider={<Divider flexItem sx={{ backgroundColor: COLOR.GC_GREEN_AA, borderBottomWidth: 2 }} />}>
          <Typography variant='h2' sx={{
            px: "20px", fontSize: '32px', fontWeight: 500, lineHeight: '150%'
          }}>
            Clinic Information
          </Typography>
          <Stack px={"20px"} pt={"13px"}>
            <InfoBox horizontal title='Clinic Name' value='Laboratory 123' />
            <InfoBox horizontal title='Dentist Name' value='Dr. Manish Shukla' />
            <InfoBox horizontal title='Postal Code' value='162-0067' />
            <InfoBox horizontal title='Prefecture' value='Fukushima' />
            <InfoBox horizontal title='City' value='Fukushima' />
            <InfoBox horizontal title='Address' value=' 1-1, Kojuinmae, Sakura Shimo' />
            <InfoBox horizontal title='Phone Number' value='9876543234' />
          </Stack>
        </Stack>
        <Stack divider={<Divider flexItem sx={{ backgroundColor: COLOR.GC_GREEN_AA, borderBottomWidth: 2 }} />}>
          <Typography variant='h2' sx={{
            px: "20px", fontSize: '32px', fontWeight: 500, lineHeight: '150%'
          }}>
            Lab Information
          </Typography>
          <Stack px={"20px"} pt={"13px"}>
            <InfoBox horizontal title='Lab Name' value='Laboratory 123' />
            <InfoBox horizontal title='Postal Code' value='162-0067' />
            <InfoBox horizontal title='Prefecture' value='Fukushima' />
            <InfoBox horizontal title='City' value='Fukushima' />
            <InfoBox horizontal title='Address' value=' 1-1, Kojuinmae, Sakura Shimo' />
            <InfoBox horizontal title='Phone Number' value='9876543234' />
          </Stack>
        </Stack>
      </Stack>
      {/* Restoration Details */}
      <Stack divider={<Divider flexItem sx={{ backgroundColor: COLOR.GC_GREEN_AA, borderBottomWidth: 2 }} />}>
        <Typography variant='h2' sx={{
          px: "20px", fontSize: '32px', fontWeight: 500, lineHeight: '150%'
        }}>
          Restoration Details
        </Typography>
        <Stack gap={2} direction={"row"} pt={2}>
          <Stack gap={2}>
            <Typography variant='body1'>
              Selected Teeth
            </Typography>
            <Box sx={{ px: '66px', borderRadius: '12px', border: `solid 1px ${COLOR.LIGHT_GREEN}` }}>
              <img src='/all-teeth.png' alt='Selected Teeth' loading="lazy" />
            </Box>
          </Stack>
          <TableContainer component={Paper} sx={{ borderRadius: '10px' }}>
            <Table aria-label="table">
              <TableHead>
                <TableRow sx={{ bgcolor: COLOR.LIGHT_GREEN }}>
                  <TableCell>Restoration Type</TableCell>
                  <TableCell>Tooth Area</TableCell>
                  <TableCell>Color</TableCell>
                  <TableCell>Material</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.restoration_type}>
                    <TableCell component="th" scope="row">
                      {row.restoration_type}
                    </TableCell>
                    <TableCell>{row.tooth_area}</TableCell>
                    <TableCell>{row.color}</TableCell>
                    <TableCell>{row.material}</TableCell>
                    <TableCell align="center"><IconLabelButton icon={<NoteIcon />} label='View Note' onClick={() => { }} /></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Stack>
      </Stack>
      {/* Set Date */}
      <Stack divider={<Divider flexItem sx={{ backgroundColor: COLOR.GC_GREEN_AA, borderBottomWidth: 2 }} />}>
        <Typography variant='h2' sx={{ fontSize: '32px', fontWeight: 500, lineHeight: '150%' }}>
          Set Date
        </Typography>
        <Stack direction={"row"} gap={"119px"} pt={2}>
          <InfoBox title='Requested Due Date' value='2023-12-27' />
          <InfoBox title='Notes' value='The Note added by the clinic regarding the order goes here' />
        </Stack>
      </Stack>
      {/* Attached Documents */}
      <Stack divider={<Divider flexItem sx={{ backgroundColor: COLOR.GC_GREEN_AA, borderBottomWidth: 2 }} />}>
        <Typography variant='h2' sx={{ fontSize: '32px', fontWeight: 500, lineHeight: '150%' }}>
          Attached Documents
        </Typography>
        <Stack direction={"row"} gap={"119px"} pt={3}>
          <Typography variant='body1'>
            <Link component={RouterLink} to="/">Click here</Link> to download order files.
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  </Paper >
}

export default function OrderDetailsPage() {
  let { orderId } = useParams();

  return (
    <>
      <Typography variant='h2' sx={{ pt: 4, pb: 2, fontSize: '42px', lineHeight: '63px', fontWeight: 'bold' }} className='noprint'>
        View Order Details
      </Typography>
      <Breadcrumbs separator=">>" aria-label="breadcrumb" sx={{ '.MuiBreadcrumbs-separator': { color: `${COLOR.GC_GREEN_AA}` }, py: '16px' }} className='noprint'>
        <Link
          underline="hover"
          key="1"
          to="/"
          component={RouterLink}
        >
          Order Listing
        </Link>
        <Typography key="2" sx={{ fontWeight: 'bold' }}>
          View Order
        </Typography>
      </Breadcrumbs>
      <OrderDetails orderId={orderId} />
    </>
  )
}
