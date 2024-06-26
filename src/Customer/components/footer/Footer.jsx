import { Grid, Link, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Grid className='bg-black text-white mt-10 text-center' container color={'white' } sx={{ bgcolor: 'black', color: 'white', py: 3 }}>
      <Grid  item xs={12} sm={6} md={3}>
        <Typography className='pb-5' variant="h6"  >
          Company
        </Typography>
        <Typography variant="body2" component="p"  >
          About
        </Typography>
        <Typography variant="body2" component="p"  >
          Blog
        </Typography>
        <Typography variant="body2" component="p"  >
          Jobs
        </Typography>
        <Typography variant="body2" component="p"  >
          Press
        </Typography>
        <Typography variant="body2" component="p"  >
          Partners
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography className='pb-5' variant="h6"  >
          Solutions
        </Typography>
        <Typography variant="body2" component="p"  >
          Marketing
        </Typography>
        <Typography variant="body2" component="p"  >
          Analytics
        </Typography>
        <Typography variant="body2" component="p"  >
          Commerce
        </Typography>
        <Typography variant="body2" component="p"  >
          Insights
        </Typography>
        <Typography variant="body2" component="p"  >
          Support
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography className='pb-5' variant="h6"  >
          Documentation
        </Typography>
        <Typography variant="body2" component="p"  >
          Guides
        </Typography>
        <Typography variant="body2" component="p"  >
          API Status
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography className='pb-5' variant="h6"  >
          Legal
        </Typography>
        <Typography variant="body2" component="p"  >
          Claim
        </Typography>
        <Typography variant="body2" component="p"  >
          Privacy
        </Typography>
        <Typography variant="body2" component="p"  >
          Terms
        </Typography>
      </Grid>
      <Grid className='pt-20' item xs={12} >
        <Typography variant="body2" component="p" align="center">
          &copy; 2024 All rights reserved.
        </Typography>
        <Typography variant="body2" component="p" align="center">
          Made with love by Me.
        </Typography>
        <Typography variant="body2" component="p" align="center">
          Icons made by{' '}
          <Link href="https://www.freepik.com" color="inherit" underline="always">
            Freepik
          </Link>{' '}
          from{' '}
          <Link href="https://www.flaticon.com/" color="inherit" underline="always">
            www.flaticon.com
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
